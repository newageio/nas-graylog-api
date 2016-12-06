export default {
  searchAbsolute: {
    path: '/search/universal/absolute',
    method: 'GET',
    parameters: [
      {
        name: 'query',
        description: 'Query (Lucene syntax)',
        required: true,
        paramType: 'query',
        type: 'String',
      },
      {
        name: 'from',
        description: 'Timerange start. See description for date format',
        required: true,
        paramType: 'query',
        type: 'String',
      },
      {
        name: 'to',
        description: 'Timerange end. See description for date format',
        required: true,
        paramType: 'query',
        type: 'String',
      },
      {
        name: 'limit',
        description: 'Maximum number of messages to return.',
        required: false,
        paramType: 'query',
        type: 'Integer',
      },
      {
        name: 'offset',
        description: 'Offset',
        required: false,
        paramType: 'query',
        type: 'Integer',
      },
      {
        name: 'filter',
        description: 'Filter',
        required: false,
        paramType: 'query',
        type: 'String',
      },
      {
        name: 'fields',
        description: 'Comma separated list of fields to return',
        required: true,
        paramType: 'query',
        type: 'String',
      },
    ],
  },
};
