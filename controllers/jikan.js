const { default: axios } = require("axios");


const jikan = {};




jikan.getAnime = async(req, res) =>{

    const { letter  } = req.query;

    try {
        axios.get(`https://api.jikan.moe/v4/anime?page=0&limit=20&letter=${letter}`)
        .then((response) =>{

            for(el of response.data.data){

                if(el.score >= 1 && el.score <= 4 ){
                    el.recommended = 'I do not recommendend it';
                }else if(el.score >= 5 && el.score <= 7){
                    el.recommended = 'You may have fun';
                }else if(el.score > 7){
                    el.recommended = 'Great, this is one of the best anime'
                }
            }
            
            return res.json(response.data);
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({
                ok:false,
                msg: error
            })
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: error
        })
    }

}

jikan.getAnimes = async(req, res) =>{


    try {
        axios.get(`https://api.jikan.moe/v4/anime?page=0&limit=10`)
        .then((response) =>{

            for(el of response.data.data){

                if(el.score >= 1 && el.score <= 4 ){
                    el.recommended = 'I do not recommendend it';
                }else if(el.score >= 5 && el.score <= 7){
                    el.recommended = 'You may have fun';
                }else if(el.score > 7){
                    el.recommended = 'Great, this is one of the best anime'
                }
            }

            return res.json(response.data);
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({
                ok:false,
                msg: error
            })
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: error
        })
    }

}

jikan.exploreAnimes = async(req, res) =>{

    const { page } = req.query;


    try {
        axios.get(`https://api.jikan.moe/v4/anime?page=${page}&limit=12`)
        .then((response) =>{

          
            for(el of response.data.data){

                if(el.score >= 1 && el.score <= 4 ){
                    el.recommended = 'I do not recommendend it';
                }else if(el.score >= 5 && el.score <= 7){
                    el.recommended = 'You may have fun';
                }else if(el.score > 7){
                    el.recommended = 'Great, this is one of the best anime'
                }
            }


            return res.json(response.data);
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).json({
                ok:false,
                msg: error
            })
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: error
        })
    }

}


module.exports = jikan;