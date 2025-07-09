class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }

//Structure of the response object
//this is the structure of the response object that will be sent to the client
//response aise hi jayega OK! Structure Follow karega