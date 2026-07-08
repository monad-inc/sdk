

# BuildkiteGraphqlInputSettingsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**enablePagination** | **Boolean** | Enable pagination support |  [optional] |
|**graphqlQuery** | **String** | The GraphQL query to execute against the endpoint to fetch data |  [optional] |
|**hasNextPagePath** | **String** | JSONPath location to check if there are more pages |  [optional] |
|**intervalSeconds** | **Integer** | Time interval in seconds between consecutive GraphQL API calls |  [optional] |
|**paginationCursorPath** | **String** | JSONPath location for pagination cursor/token |  [optional] |
|**recordLocation** | **String** | JSONPath location of the records array in the GraphQL response |  [optional] |
|**variables** | [**List&lt;MonadGraphqlInputVariable&gt;**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request |  [optional] |



