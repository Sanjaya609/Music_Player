import { MUTE_MUSIC, PREVIEW_PAUSE, PREVIEW_PLAYING, PREVIEW_RESUME } from "../Constants"

export const playMusic=(preview)=>{
    return {
        type:PREVIEW_PLAYING,
        payload:preview,
    }
};
export const pauseMusic=()=>{
    return{
        type:PREVIEW_PAUSE,
    }
}

export const resumeMusic=()=>{
    return{
        type:PREVIEW_RESUME,
    }
}
export const muteMusic=()=>{
    return{
        type:MUTE_MUSIC,
    }
}
