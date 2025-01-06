# ModelsSecretList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Secrets** | Pointer to [**[]ModelsSecret**](ModelsSecret.md) |  | [optional] 

## Methods

### NewModelsSecretList

`func NewModelsSecretList() *ModelsSecretList`

NewModelsSecretList instantiates a new ModelsSecretList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSecretListWithDefaults

`func NewModelsSecretListWithDefaults() *ModelsSecretList`

NewModelsSecretListWithDefaults instantiates a new ModelsSecretList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsSecretList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsSecretList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsSecretList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsSecretList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetSecrets

`func (o *ModelsSecretList) GetSecrets() []ModelsSecret`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *ModelsSecretList) GetSecretsOk() (*[]ModelsSecret, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *ModelsSecretList) SetSecrets(v []ModelsSecret)`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *ModelsSecretList) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


