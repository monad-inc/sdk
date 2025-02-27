# ModelsSecretWithComponentsList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Secrets** | Pointer to [**[]ModelsSecretWithComponents**](ModelsSecretWithComponents.md) |  | [optional] 

## Methods

### NewModelsSecretWithComponentsList

`func NewModelsSecretWithComponentsList() *ModelsSecretWithComponentsList`

NewModelsSecretWithComponentsList instantiates a new ModelsSecretWithComponentsList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSecretWithComponentsListWithDefaults

`func NewModelsSecretWithComponentsListWithDefaults() *ModelsSecretWithComponentsList`

NewModelsSecretWithComponentsListWithDefaults instantiates a new ModelsSecretWithComponentsList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsSecretWithComponentsList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsSecretWithComponentsList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsSecretWithComponentsList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsSecretWithComponentsList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetSecrets

`func (o *ModelsSecretWithComponentsList) GetSecrets() []ModelsSecretWithComponents`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *ModelsSecretWithComponentsList) GetSecretsOk() (*[]ModelsSecretWithComponents, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *ModelsSecretWithComponentsList) SetSecrets(v []ModelsSecretWithComponents)`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *ModelsSecretWithComponentsList) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


