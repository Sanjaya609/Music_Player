import { PREVIEW_PLAYING } from "../Constants"

export const playMusic=(preview)=>{
    return {
        type:PREVIEW_PLAYING,
        payload:preview,
    }
};