import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandle = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10' >
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandle}
                    value={props.description}>
                </input>
            </Grid>

            <Grid cols='12 3 2' >
                <IconButton title='Adicionar (Enter)' style='primary' icon='plus'
                    onClick={props.handleAdd}>
                </IconButton>
                <IconButton title='Pesquisar (Shift Enter)' style='info' icon='search'
                    onClick={props.handleSearch}>
                </IconButton>
                <IconButton title='Limpar (Esc)' style='default' icon='close'
                    onClick={props.handleClear}>
                </IconButton>
            </Grid>
        </div>
    )
}