import React, { Component } from 'react';
import api from '../services/api';
import {Button} from "@blueprintjs/core";


class Form extends Component {

  state = {
    file: null
  }
  
  handleFile(e){

    let file = e.target.files[0];
    this.setState({ file: file})

  }

  handleUpload(e){
    let file = this.state.file;

    let formdata = new FormData()

    formdata.append('answer', file)

    api.post('submit-solution?token=cbbe54251474cc2cf4e35a783bdb7a895f14b028', formdata, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }).then((res)=>{
      console.log(res);
    }, (err=>{
      console.log(err);

    }))


  }

  render() {
    return (
      <div>
        <h1>Formulário de Envio do Arquivo</h1>
        <form>

          <div>
            <label>Selecione o arquivo</label>
            <input type="file" name="file" onChange={(e)=>this.handleFile(e)} />
          </div>
          <br />

          {/* <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button> */}
          <Button text="ENVIAR ARQUIVO"  className="bp3-button" icon="upload" type="button" onClick={(e)=>this.handleUpload(e)} />

        </form>
      </div>
    )
  }


}
export default Form;