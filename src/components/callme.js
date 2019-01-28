import React from 'react';

class CallMeClass extends React.Component {

    render() {
        return (
            <div className="container--flex__middle" key="callme">
                <div className="container--flex__middle callme--bg__oil">
                    <div className="callme--form">
                        <h2 className="callme--title">Cotiza en instantes</h2>
                        <form className="container--flex__middle">
                            <label className="text--center">
                                <input type="text" name="name" className="margin-1" placeholder="Nombre" />
                                <input type="text" name="mail" className="margin-1" placeholder="Correo" />
                                <select className="margin-1">
                                    <option>Plan normal</option>
                                    <option>Plan medio</option>
                                    <option>Plan caro</option>
                                </select>
                            </label>
                            <button type="submit" value="Submit" className="margin-2">Enviar</button>
                        </form>
                    </div>
                </div>
                <div className="container--flex__middle callme--bg__berry">
                    <div className="callme--form">
                        <h2 className="callme--title">Prefieres que te llamemos?
                        <br />
                            <span>Prometemos no hacer spam</span>
                        </h2>
                        <form className="container--flex__middle">
                            <label className="text--center">
                                <input type="text" name="name" placeholder="Nombre" className="margin-1" />
                                <input type="number" name="phone" placeholder="+56" className="margin-1" />
                            </label>
                            <button type="submit" value="Submit" className="margin-2">Call me plz...</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CallMeClass;