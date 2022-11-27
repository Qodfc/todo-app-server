const memoIDSchema = {
    $id: 'memoIDSchema',
    type: 'object',
    additionalProperties: false,
    required: [
        'memoID'
    ],
    properties: {
        memoID: { type: 'string' }
    }
};

module.exports = memoIDSchema;