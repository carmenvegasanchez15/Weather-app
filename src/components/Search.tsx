import React, { useState } from 'react'

interface SearchProps {
    location?: any
}

const Search = (props: SearchProps) => {
    const { location } = props
    const [city, setCity] = useState('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (city === '' || !city) return
        location(city)
    }

    return (
        <div className="container">
            <nav className="navbar mx-auto m-3">
                <div className="container-fluid">
                    <h1 className="mx-auto">Predicción metereológica</h1>
                </div>
            </nav>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className="btn input-group-text text-light" type="submit">
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search