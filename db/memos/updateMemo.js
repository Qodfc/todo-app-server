const db = require('../connector');

const updateMemo = async (userID, memoID) => {
    const docRef = db.collection('memos').find()

    await docRef.set({
        
    });

    await docRef.update({
        
    })
}

module.exports = updateMemo;