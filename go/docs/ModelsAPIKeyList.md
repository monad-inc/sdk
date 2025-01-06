# ModelsAPIKeyList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKeys** | Pointer to [**[]ModelsAPIKey**](ModelsAPIKey.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsAPIKeyList

`func NewModelsAPIKeyList() *ModelsAPIKeyList`

NewModelsAPIKeyList instantiates a new ModelsAPIKeyList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsAPIKeyListWithDefaults

`func NewModelsAPIKeyListWithDefaults() *ModelsAPIKeyList`

NewModelsAPIKeyListWithDefaults instantiates a new ModelsAPIKeyList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiKeys

`func (o *ModelsAPIKeyList) GetApiKeys() []ModelsAPIKey`

GetApiKeys returns the ApiKeys field if non-nil, zero value otherwise.

### GetApiKeysOk

`func (o *ModelsAPIKeyList) GetApiKeysOk() (*[]ModelsAPIKey, bool)`

GetApiKeysOk returns a tuple with the ApiKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKeys

`func (o *ModelsAPIKeyList) SetApiKeys(v []ModelsAPIKey)`

SetApiKeys sets ApiKeys field to given value.

### HasApiKeys

`func (o *ModelsAPIKeyList) HasApiKeys() bool`

HasApiKeys returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsAPIKeyList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsAPIKeyList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsAPIKeyList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsAPIKeyList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


