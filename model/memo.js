const memoSchema = {
    $id: 'memoSchema',
    type: 'object',
    additionalProperties: false,
    required: [
        'article',
        'color',
        'id',
        'tags',
        'title'
    ],
    properties: {
        _id: { type: 'string' },
        authToken: { type: 'string' },
        article: { type: 'string' },
        color: { type: 'string' },
        id: { type: 'string' },
        tags: { 
            type: 'array',
            items: {
                type: 'string'
            }
         },
        title: { type: 'string' }
    }
};

module.exports = memoSchema;