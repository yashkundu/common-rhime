import { ObjectID } from "bson";

export const objectIdValidator = (id: string) => {
    if(ObjectID.isValid(id)){
        if((String)(new ObjectID(id)) === id) return true
        return false
    }
    return false
}