import React, { Component } from 'react'
import base, { storage } from './base'

import HeaderInterno from './HeaderInterno'

class NovoAnuncio extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        const file = this.foto.files[0]
        const { name, size } = file
        const ref = storage.ref(name)
        var uploadTask = ref.put(file)

        let novoAnuncio = {
            nome: this.nome.value,
            descricao: this.descricao.value,
            preco: this.preco.value,
            telefone: this.telefone.value,
            vendedor: this.vendedor.value
        }

        uploadTask.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // Caso queira mostrar o progresso, descomentar a linha abaixo
            //console.log('Upload is ' + progress + '% done');
        }, function (error) {
        }, function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                const novoAnuncioFoto = ({
                    // usando destructuring assignment, pegando o novoAnuncio e incrementando o atributo FOTO
                    // o objetivo é que, usando img.metadata.downloadURLs[0] ficou obsoleto.
                    // A documentação do Firebase pede para usar desta forma
                    ...novoAnuncio, foto: downloadURL
                })
                base.push('anuncios', {
                    data: novoAnuncioFoto
                }, (err) => {
                    if (err) {
                    } else {
                    }
                })
            });
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <HeaderInterno />
                <div className='container' style={{ padding: '120px' }}>
                    <h1>Novo Anúncio</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id='nome' placeholder='Nome' ref={(ref) => this.nome = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição</label>
                            <input type='text' className='form-control' id='descricao' placeholder='Descrição' ref={(ref) => this.descricao = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preco'>Preço</label>
                            <input type='text' className='form-control' id='preco' placeholder='Preço' ref={(ref) => this.preco = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone</label>
                            <input type='text' className='form-control' id='telefone' placeholder='Telefone' ref={(ref) => this.telefone = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='vendedor'>Vendedor</label>
                            <input type='text' className='form-control' id='vendedor' placeholder='Vendedor' ref={(ref) => this.vendedor = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='foto'>Foto</label>
                            <input type='file' className='form-control' id='foto' placeholder='Foto' ref={(ref) => this.foto = ref} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Salvar anúncio</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NovoAnuncio