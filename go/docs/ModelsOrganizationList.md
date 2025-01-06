# ModelsOrganizationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Organizations** | Pointer to [**[]ModelsOrganization**](ModelsOrganization.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsOrganizationList

`func NewModelsOrganizationList() *ModelsOrganizationList`

NewModelsOrganizationList instantiates a new ModelsOrganizationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsOrganizationListWithDefaults

`func NewModelsOrganizationListWithDefaults() *ModelsOrganizationList`

NewModelsOrganizationListWithDefaults instantiates a new ModelsOrganizationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizations

`func (o *ModelsOrganizationList) GetOrganizations() []ModelsOrganization`

GetOrganizations returns the Organizations field if non-nil, zero value otherwise.

### GetOrganizationsOk

`func (o *ModelsOrganizationList) GetOrganizationsOk() (*[]ModelsOrganization, bool)`

GetOrganizationsOk returns a tuple with the Organizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizations

`func (o *ModelsOrganizationList) SetOrganizations(v []ModelsOrganization)`

SetOrganizations sets Organizations field to given value.

### HasOrganizations

`func (o *ModelsOrganizationList) HasOrganizations() bool`

HasOrganizations returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsOrganizationList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsOrganizationList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsOrganizationList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsOrganizationList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


