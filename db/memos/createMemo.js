const db = require('../connector');

const getMemos = async (userID, memoObj) => {
    const doc = db.collection('memos').doc(userID).collection('memos');

    try {
        await doc.add(memoObj);
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
}

module.exports = getMemos;