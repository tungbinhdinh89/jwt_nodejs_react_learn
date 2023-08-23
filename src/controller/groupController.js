import groupService from '../service/groupService'

const getGroupList = async (req,res) => {
    try {
        let data = await groupService.getGroups()
        console.log('res: ', res);
        return res.status(200).json({
            errorMessage: data.EM,
            errorCode: data.EC,
            data: data.DT,
        })

    } catch(error){
        return res.status(500).json({
            errorMessage: 'error from server',
            errorCode: 1,
            data: [],
        })
    }

}

module.exports = {
    getGroupList
};
