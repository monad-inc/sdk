# BuildkiteGraphqlInputSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnablePagination** | Pointer to **bool** | Enable pagination support | [optional] 
**GraphqlQuery** | Pointer to **string** | The GraphQL query to execute against the endpoint to fetch data | [optional] 
**HasNextPagePath** | Pointer to **string** | JSONPath location to check if there are more pages | [optional] 
**IntervalSeconds** | Pointer to **int32** | Time interval in seconds between consecutive GraphQL API calls | [optional] 
**PaginationCursorPath** | Pointer to **string** | JSONPath location for pagination cursor/token | [optional] 
**RecordLocation** | Pointer to **string** | JSONPath location of the records array in the GraphQL response | [optional] 
**Variables** | Pointer to [**[]MonadGraphqlInputVariable**](MonadGraphqlInputVariable.md) | GraphQL query variables to pass with each request | [optional] 

## Methods

### NewBuildkiteGraphqlInputSettingsConfig

`func NewBuildkiteGraphqlInputSettingsConfig() *BuildkiteGraphqlInputSettingsConfig`

NewBuildkiteGraphqlInputSettingsConfig instantiates a new BuildkiteGraphqlInputSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBuildkiteGraphqlInputSettingsConfigWithDefaults

`func NewBuildkiteGraphqlInputSettingsConfigWithDefaults() *BuildkiteGraphqlInputSettingsConfig`

NewBuildkiteGraphqlInputSettingsConfigWithDefaults instantiates a new BuildkiteGraphqlInputSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnablePagination

`func (o *BuildkiteGraphqlInputSettingsConfig) GetEnablePagination() bool`

GetEnablePagination returns the EnablePagination field if non-nil, zero value otherwise.

### GetEnablePaginationOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetEnablePaginationOk() (*bool, bool)`

GetEnablePaginationOk returns a tuple with the EnablePagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnablePagination

`func (o *BuildkiteGraphqlInputSettingsConfig) SetEnablePagination(v bool)`

SetEnablePagination sets EnablePagination field to given value.

### HasEnablePagination

`func (o *BuildkiteGraphqlInputSettingsConfig) HasEnablePagination() bool`

HasEnablePagination returns a boolean if a field has been set.

### GetGraphqlQuery

`func (o *BuildkiteGraphqlInputSettingsConfig) GetGraphqlQuery() string`

GetGraphqlQuery returns the GraphqlQuery field if non-nil, zero value otherwise.

### GetGraphqlQueryOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetGraphqlQueryOk() (*string, bool)`

GetGraphqlQueryOk returns a tuple with the GraphqlQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphqlQuery

`func (o *BuildkiteGraphqlInputSettingsConfig) SetGraphqlQuery(v string)`

SetGraphqlQuery sets GraphqlQuery field to given value.

### HasGraphqlQuery

`func (o *BuildkiteGraphqlInputSettingsConfig) HasGraphqlQuery() bool`

HasGraphqlQuery returns a boolean if a field has been set.

### GetHasNextPagePath

`func (o *BuildkiteGraphqlInputSettingsConfig) GetHasNextPagePath() string`

GetHasNextPagePath returns the HasNextPagePath field if non-nil, zero value otherwise.

### GetHasNextPagePathOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetHasNextPagePathOk() (*string, bool)`

GetHasNextPagePathOk returns a tuple with the HasNextPagePath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNextPagePath

`func (o *BuildkiteGraphqlInputSettingsConfig) SetHasNextPagePath(v string)`

SetHasNextPagePath sets HasNextPagePath field to given value.

### HasHasNextPagePath

`func (o *BuildkiteGraphqlInputSettingsConfig) HasHasNextPagePath() bool`

HasHasNextPagePath returns a boolean if a field has been set.

### GetIntervalSeconds

`func (o *BuildkiteGraphqlInputSettingsConfig) GetIntervalSeconds() int32`

GetIntervalSeconds returns the IntervalSeconds field if non-nil, zero value otherwise.

### GetIntervalSecondsOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetIntervalSecondsOk() (*int32, bool)`

GetIntervalSecondsOk returns a tuple with the IntervalSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntervalSeconds

`func (o *BuildkiteGraphqlInputSettingsConfig) SetIntervalSeconds(v int32)`

SetIntervalSeconds sets IntervalSeconds field to given value.

### HasIntervalSeconds

`func (o *BuildkiteGraphqlInputSettingsConfig) HasIntervalSeconds() bool`

HasIntervalSeconds returns a boolean if a field has been set.

### GetPaginationCursorPath

`func (o *BuildkiteGraphqlInputSettingsConfig) GetPaginationCursorPath() string`

GetPaginationCursorPath returns the PaginationCursorPath field if non-nil, zero value otherwise.

### GetPaginationCursorPathOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetPaginationCursorPathOk() (*string, bool)`

GetPaginationCursorPathOk returns a tuple with the PaginationCursorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaginationCursorPath

`func (o *BuildkiteGraphqlInputSettingsConfig) SetPaginationCursorPath(v string)`

SetPaginationCursorPath sets PaginationCursorPath field to given value.

### HasPaginationCursorPath

`func (o *BuildkiteGraphqlInputSettingsConfig) HasPaginationCursorPath() bool`

HasPaginationCursorPath returns a boolean if a field has been set.

### GetRecordLocation

`func (o *BuildkiteGraphqlInputSettingsConfig) GetRecordLocation() string`

GetRecordLocation returns the RecordLocation field if non-nil, zero value otherwise.

### GetRecordLocationOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetRecordLocationOk() (*string, bool)`

GetRecordLocationOk returns a tuple with the RecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordLocation

`func (o *BuildkiteGraphqlInputSettingsConfig) SetRecordLocation(v string)`

SetRecordLocation sets RecordLocation field to given value.

### HasRecordLocation

`func (o *BuildkiteGraphqlInputSettingsConfig) HasRecordLocation() bool`

HasRecordLocation returns a boolean if a field has been set.

### GetVariables

`func (o *BuildkiteGraphqlInputSettingsConfig) GetVariables() []MonadGraphqlInputVariable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *BuildkiteGraphqlInputSettingsConfig) GetVariablesOk() (*[]MonadGraphqlInputVariable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *BuildkiteGraphqlInputSettingsConfig) SetVariables(v []MonadGraphqlInputVariable)`

SetVariables sets Variables field to given value.

### HasVariables

`func (o *BuildkiteGraphqlInputSettingsConfig) HasVariables() bool`

HasVariables returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


