class CitiesContainer extends React.Component{
    render(){
        const cities = this.props.data.map((city,i)=>{
            const randomImage = `https://picsum.photos/${400+i}/300`
            return(
                <div key={i} className="city">
                    <img src={randomImage}/>
                    <div className="city-name">{city.name}</div>
                    <div className="city-price">{city.price}</div>
                </div>
            )
        })
        return(
            <div className="row">
                <div className="cities center-align">
                    {cities}
                </div>
            </div>
        )
    }
}
