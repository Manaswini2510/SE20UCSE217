import {Component} from 'react'
import './index.css'

class TrainComponent extends Component{
    state = {
        details: [
            {
                "trainName": "Kolkata Exp",
                "trainNumber": "2345",
                "departureTime": {
                    "Hours": 20,
                    "Minutes": 15,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 16,
                    "AC": 70
                },
                "price": {
                    "sleeper": 6600,
                    "AC": 6700
                },
                "delayedBy": 14
            },
            {
                "trainName": "Pune Exp",
                "trainNumber": "2342",
                "departureTime": {
                    "Hours": 23,
                    "Minutes": 0,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 6,
                    "AC": 7
                },
                "price": {
                    "sleeper": 14,
                    "AC": 9
                },
                "delayedBy": 17
            },
            {
                "trainName": "Hyderabad Exp",
                "trainNumber": "2341",
                "departureTime": {
                    "Hours": 23,
                    "Minutes": 55,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 6,
                    "AC": 7
                },
                "price": {
                    "sleeper": 554,
                    "AC": 1854
                },
                "delayedBy": 5
            },
            {
                "trainName": "Amritsar Exp",
                "trainNumber": "2346",
                "departureTime": {
                    "Hours": 19,
                    "Minutes": 0,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 15,
                    "AC": 10
                },
                "price": {
                    "sleeper": 15,
                    "AC": 5
                },
                "delayedBy": 13
            },
            {
                "trainName": "Mumbai Exp",
                "trainNumber": "2343",
                "departureTime": {
                    "Hours": 22,
                    "Minutes": 37,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 8,
                    "AC": 15
                },
                "price": {
                    "sleeper": 6420,
                    "AC": 6520
                },
                "delayedBy": 16
            },
            {
                "trainName": "Srinagar Exp",
                "trainNumber": "2349",
                "departureTime": {
                    "Hours": 14,
                    "Minutes": 55,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 1,
                    "AC": 0
                },
                "price": {
                    "sleeper": 7037,
                    "AC": 7124
                },
                "delayedBy": 10
            },
            {
                "trainName": "Cochin Exp",
                "trainNumber": "2348",
                "departureTime": {
                    "Hours": 15,
                    "Minutes": 55,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 1,
                    "AC": 0
                },
                "price": {
                    "sleeper": 2,
                    "AC": 4
                },
                "delayedBy": 11
            },
            {
                "trainName": "Lucknow Exp",
                "trainNumber": "2347",
                "departureTime": {
                    "Hours": 17,
                    "Minutes": 33,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 5,
                    "AC": 1
                },
                "price": {
                    "sleeper": 5086,
                    "AC": 6413
                },
                "delayedBy": 12
            },
            {
                "trainName": "Chennai Exp",
                "trainNumber": "2344",
                "departureTime": {
                    "Hours": 21,
                    "Minutes": 35,
                    "Seconds": 0
                },
                "seatsAvailable": {
                    "sleeper": 3,
                    "AC": 1
                },
                "price": {
                    "sleeper": 2,
                    "AC": 5
                },
                "delayedBy": 15
            }
        ]
    }
    async componentDidMount(){
        try{
            const body = {
                "companyName": "Railway",
                "clientID": "68d9ad80-1eb7-4d10-8d2f-a84672678ca6",
                "clientSecret": "DSmQvjkQAnNcDAXP",
                "ownerName": "Manaswini",
                "ownerEmail": "manaswini20ucse217@mahindrauniversity.edu.in",
                "rollNo": "SE20UCSE217"
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
            const res = await fetch("http://20.244.56.144/train/auth", options)
            const result = await res.json()
            const token = result.access_token

            const optionsa = {
                method: "GET",
                headers: {
                  "Authorization": `Bearer ${token}`,
                  // Add any other headers if required
                },
              };
    
            const a = await fetch("http://20.244.56.144/train/trains", optionsa)
            const b = await a.json()
            this.setState({details: b})
            }catch(e){

            }
    }
    sendRequest = (id)=>{
        console.log(id)
    }

    render(){
        const {details} = this.state
        return (
            <div className='bg-container'>
                <div className='card'>
                {details.map((eachItem)=>{
                    const time = `${eachItem.departureTime.Hours}:${eachItem.departureTime.Minutes}:${eachItem.departureTime.Seconds}0`
                    return (
                       
                        <div className='container' onClick = {this.sendRequest(eachItem.trainNumber)}>
                            <h1>{eachItem.trainName}</h1>
                            <p>{eachItem.trainNumber}</p>
                            <p>Time: {time}</p>
                        </div>
                    )
                   
                })}
                </div>
                
            </div>
        )
    }
}

export default TrainComponent