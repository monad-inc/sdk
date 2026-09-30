# TaniumGraphqlInputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseUrl** | Pointer to **string** | The base URL of your GraphQL endpoint including the path | [optional] 
**EnablePagination** | Pointer to **bool** | Enable pagination support | [optional] 
**GraphqlQuery** | Pointer to **string** | The GraphQL query to execute against the endpoint to fetch data | [optional] 
**HasNextPagePath** | Pointer to **string** | JSONPath location to check if there are more pages | [optional] 
**IntervalSeconds** | Pointer to **int32** | Time interval in seconds between consecutive GraphQL API calls | [optional] 
**PaginationCursorPath** | Pointer to **string** | JSONPath location for pagination cursor/token | [optional] 
**RecordLocation** | Pointer to **string** | JSONPath location of the records array in the GraphQL response | [optional] 
**Variables** | Pointer to [**[]MonadGraphqlInputVariable**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request | [optional] 

## Methods

### NewTaniumGraphqlInputSettingsConfig

`func NewTaniumGraphqlInputSettingsConfig() *TaniumGraphqlInputSettingsConfig`

NewTaniumGraphqlInputSettingsConfig instantiates a new TaniumGraphqlInputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaniumGraphqlInputSettingsConfigWithDefaults

`func NewTaniumGraphqlInputSettingsConfigWithDefaults() *TaniumGraphqlInputSettingsConfig`

NewTaniumGraphqlInputSettingsConfigWithDefaults instantiates a new TaniumGraphqlInputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseUrl

`func (o *TaniumGraphqlInputSettingsConfig) GetBaseUrl() string`

GetBaseUrl returns the BaseUrl field if non-nil, zero value otherwise.

### GetBaseUrlOk

`func (o *TaniumGraphqlInputSettingsConfig) GetBaseUrlOk() (*string, bool)`

GetBaseUrlOk returns a tuple with the BaseUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseUrl

`func (o *TaniumGraphqlInputSettingsConfig) SetBaseUrl(v string)`

SetBaseUrl sets BaseUrl field to given value.

### HasBaseUrl

`func (o *TaniumGraphqlInputSettingsConfig) HasBaseUrl() bool`

HasBaseUrl returns a boolean if a field has been set.

### GetEnablePagination

`func (o *TaniumGraphqlInputSettingsConfig) GetEnablePagination() bool`

GetEnablePagination returns the EnablePagination field if non-nil, zero value otherwise.

### GetEnablePaginationOk

`func (o *TaniumGraphqlInputSettingsConfig) GetEnablePaginationOk() (*bool, bool)`

GetEnablePaginationOk returns a tuple with the EnablePagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnablePagination

`func (o *TaniumGraphqlInputSettingsConfig) SetEnablePagination(v bool)`

SetEnablePagination sets EnablePagination field to given value.

### HasEnablePagination

`func (o *TaniumGraphqlInputSettingsConfig) HasEnablePagination() bool`

HasEnablePagination returns a boolean if a field has been set.

### GetGraphqlQuery

`func (o *TaniumGraphqlInputSettingsConfig) GetGraphqlQuery() string`

GetGraphqlQuery returns the GraphqlQuery field if non-nil, zero value otherwise.

### GetGraphqlQueryOk

`func (o *TaniumGraphqlInputSettingsConfig) GetGraphqlQueryOk() (*string, bool)`

GetGraphqlQueryOk returns a tuple with the GraphqlQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphqlQuery

`func (o *TaniumGraphqlInputSettingsConfig) SetGraphqlQuery(v string)`

SetGraphqlQuery sets GraphqlQuery field to given value.

### HasGraphqlQuery

`func (o *TaniumGraphqlInputSettingsConfig) HasGraphqlQuery() bool`

HasGraphqlQuery returns a boolean if a field has been set.

### GetHasNextPagePath

`func (o *TaniumGraphqlInputSettingsConfig) GetHasNextPagePath() string`

GetHasNextPagePath returns the HasNextPagePath field if non-nil, zero value otherwise.

### GetHasNextPagePathOk

`func (o *TaniumGraphqlInputSettingsConfig) GetHasNextPagePathOk() (*string, bool)`

GetHasNextPagePathOk returns a tuple with the HasNextPagePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNextPagePath

`func (o *TaniumGraphqlInputSettingsConfig) SetHasNextPagePath(v string)`

SetHasNextPagePath sets HasNextPagePath field to given value.

### HasHasNextPagePath

`func (o *TaniumGraphqlInputSettingsConfig) HasHasNextPagePath() bool`

HasHasNextPagePath returns a boolean if a field has been set.

### GetIntervalSeconds

`func (o *TaniumGraphqlInputSettingsConfig) GetIntervalSeconds() int32`

GetIntervalSeconds returns the IntervalSeconds field if non-nil, zero value otherwise.

### GetIntervalSecondsOk

`func (o *TaniumGraphqlInputSettingsConfig) GetIntervalSecondsOk() (*int32, bool)`

GetIntervalSecondsOk returns a tuple with the IntervalSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervalSeconds

`func (o *TaniumGraphqlInputSettingsConfig) SetIntervalSeconds(v int32)`

SetIntervalSeconds sets IntervalSeconds field to given value.

### HasIntervalSeconds

`func (o *TaniumGraphqlInputSettingsConfig) HasIntervalSeconds() bool`

HasIntervalSeconds returns a boolean if a field has been set.

### GetPaginationCursorPath

`func (o *TaniumGraphqlInputSettingsConfig) GetPaginationCursorPath() string`

GetPaginationCursorPath returns the PaginationCursorPath field if non-nil, zero value otherwise.

### GetPaginationCursorPathOk

`func (o *TaniumGraphqlInputSettingsConfig) GetPaginationCursorPathOk() (*string, bool)`

GetPaginationCursorPathOk returns a tuple with the PaginationCursorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaginationCursorPath

`func (o *TaniumGraphqlInputSettingsConfig) SetPaginationCursorPath(v string)`

SetPaginationCursorPath sets PaginationCursorPath field to given value.

### HasPaginationCursorPath

`func (o *TaniumGraphqlInputSettingsConfig) HasPaginationCursorPath() bool`

HasPaginationCursorPath returns a boolean if a field has been set.

### GetRecordLocation

`func (o *TaniumGraphqlInputSettingsConfig) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *TaniumGraphqlInputSettingsConfig) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *TaniumGraphqlInputSettingsConfig) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *TaniumGraphqlInputSettingsConfig) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.

### GetVariables

`func (o *TaniumGraphqlInputSettingsConfig) GetVariables() []MonadGraphqlInputVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *TaniumGraphqlInputSettingsConfig) GetVariablesOk() (*[]MonadGraphqlInputVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *TaniumGraphqlInputSettingsConfig) SetVariables(v []MonadGraphqlInputVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *TaniumGraphqlInputSettingsConfig) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


