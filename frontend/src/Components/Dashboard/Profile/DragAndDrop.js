import React, { Component } from 'react';
import './DragAndDrop.css';

class DragAndDrop extends Component {
    constructor(props){
        super(props);
        this.state = {
            dragging: false,
            file: null
        }
    }
    
    uploadCvHandler = e => {
        e.preventDefault();
        if(this.state.file){
            const data = new FormData();
            data.append('file', this.state.file);
    
            fetch(this.props.url, {
                method: 'POST',
                body: data
            }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }
    }

    // dragHandler = e => {

    // }

    // dragstartHandler = e => {

    // }
    // dragendHandler = e => {
    //     e.preventDefault();
    //     e.stopPropagation()
    // }
    dragoverHandler = e => {
        e.preventDefault();
        e.stopPropagation()
    }
    dragenterHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0){
            this.setState({dragging: true})
        }
    }
    dragleaveHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter > 0) return;
        this.setState({dragging: false});
    }
    dropHandler = e => {
        e.preventDefault();
        e.stopPropagation();

        this.setState({dragging: false})
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            // this.props.handleDrop(e.dataTransfer.files);
            this.setState({
                file: e.dataTransfer.files[0],
              })
            e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    }
    
    dropRef = React.createRef()
    
    componentDidMount() {
        this.dragCounter = 0;
        let dropZone = this.dropRef.current;
        // dropZone.addEventListener("drag", this.dragHandler);
        // dropZone.addEventListener("dragstart", this.dragstartHandler);
        // dropZone.addEventListener("dragend", this.dragendHandler);
        // dropZone.addEventListener("dragend", this.dragendHandler);
        dropZone.addEventListener("dragover", this.dragoverHandler);
        dropZone.addEventListener("dragenter", this.dragenterHandler);
        dropZone.addEventListener("dragleave", this.dragleaveHandler);
        dropZone.addEventListener("drop", this.dropHandler);
    }
    componentWillUnmount(){
        let dropZone = this.dropRef.current;
        // dropZone.removeEventListener("drag", this.dragHandler);
        // dropZone.removeEventListener("dragstart", this.dragstartHandler);
        // dropZone.removeEventListener("dragend", this.dragendHandler);
        // dropZone.removeEventListener("dragend", this.dragendHandler);
        dropZone.removeEventListener("dragover", this.dragoverHandler);
        dropZone.removeEventListener("dragenter", this.dragenterHandler);
        dropZone.removeEventListener("dragleave", this.dragleaveHandler);
        dropZone.removeEventListener("drop", this.dropHandler);
    }
    render(){

        return(
            <form className="profile__form box">
                    <h3>Change your profile pic</h3>
                    <div id="drop-zone" className="drop-zone" ref={this.dropRef}>
                        {this.state.dragging &&
                        <div 
                            style={{
                            border: 'dashed grey 4px',
                            backgroundColor: 'rgba(255,255,255,.8)',
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0, 
                            right: 0,
                            zIndex: 9999
                            }}>
                                <div 
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 0,
                                    left: 0,
                                    textAlign: 'center',
                                    color: 'grey',
                                    fontSize: 36
                                }}
                                >
                                <div>Drop here</div>
                            </div>
                        </div>
                        }
                        <div class="box__input">
                            <input class="box__file" type="file" name="files[]" id="file" />
                            <label for="file">
                                <strong>Choose a file</strong>
                                <span class="box__dragndrop"> or drag it here.</span>
                            </label>
                            <button class="box__button" type="submit" onClick={this.uploadCvHandler}>Upload</button>
                        </div>
                        {/* <div class="box__uploading">Uploading…</div>
                        <div class="box__success">Done!</div>
                        <div class="box__error">Error! <span></span>.</div> */}
                    </div>
            </form>
        )
    } 
}

export default DragAndDrop;