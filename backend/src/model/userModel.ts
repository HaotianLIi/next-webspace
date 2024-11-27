import db from '../db'

const getAllUser = async () => {
    try {
        const result = db.any('SELECT * FROM users')
        console.log('User table: ', result)
        return result
    } catch (err) {
        if(err instanceof Error){
            console.error('Error message', err.message)
        } else {
            console.error('Unknown error occurred', err)
        }
        
    }
    
    
}



export {
    getAllUser
}