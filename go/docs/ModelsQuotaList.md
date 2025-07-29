# ModelsQuotaList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Quotas** | Pointer to [**[]ModelsQuota**](ModelsQuota.md) |  | [optional] 

## Methods

### NewModelsQuotaList

`func NewModelsQuotaList() *ModelsQuotaList`

NewModelsQuotaList instantiates a new ModelsQuotaList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsQuotaListWithDefaults

`func NewModelsQuotaListWithDefaults() *ModelsQuotaList`

NewModelsQuotaListWithDefaults instantiates a new ModelsQuotaList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsQuotaList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsQuotaList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsQuotaList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsQuotaList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetQuotas

`func (o *ModelsQuotaList) GetQuotas() []ModelsQuota`

GetQuotas returns the Quotas field if non-nil, zero value otherwise.

### GetQuotasOk

`func (o *ModelsQuotaList) GetQuotasOk() (*[]ModelsQuota, bool)`

GetQuotasOk returns a tuple with the Quotas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuotas

`func (o *ModelsQuotaList) SetQuotas(v []ModelsQuota)`

SetQuotas sets Quotas field to given value.

### HasQuotas

`func (o *ModelsQuotaList) HasQuotas() bool`

HasQuotas returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


