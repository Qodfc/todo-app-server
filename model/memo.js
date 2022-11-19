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
        article: { type: 'string' },
        color: { type: 'string' },
        id: { type: 'integer' },
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