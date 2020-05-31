import React from 'react'

const Greeting = ({ greeting }) => {
    return (
        <div>
            <center><h1>Greetings From Server</h1></center>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{greeting.id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{greeting.content}</h6>
                    </div>
                </div>
        </div>
    )
};

export default Greeting