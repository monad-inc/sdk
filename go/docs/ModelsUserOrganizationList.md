# ModelsUserOrganizationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Organizations** | Pointer to [**[]ModelsUserOrganization**](ModelsUserOrganization.md) |  | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 

## Methods

### NewModelsUserOrganizationList

`func NewModelsUserOrganizationList() *ModelsUserOrganizationList`

NewModelsUserOrganizationList instantiates a new ModelsUserOrganizationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsUserOrganizationListWithDefaults

`func NewModelsUserOrganizationListWithDefaults() *ModelsUserOrganizationList`

NewModelsUserOrganizationListWithDefaults instantiates a new ModelsUserOrganizationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizations

`func (o *ModelsUserOrganizationList) GetOrganizations() []ModelsUserOrganization`

GetOrganizations returns the Organizations field if non-nil, zero value otherwise.

### GetOrganizationsOk

`func (o *ModelsUserOrganizationList) GetOrganizationsOk() (*[]ModelsUserOrganization, bool)`

GetOrganizationsOk returns a tuple with the Organizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizations

`func (o *ModelsUserOrganizationList) SetOrganizations(v []ModelsUserOrganization)`

SetOrganizations sets Organizations field to given value.

### HasOrganizations

`func (o *ModelsUserOrganizationList) HasOrganizations() bool`

HasOrganizations returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsUserOrganizationList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsUserOrganizationList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsUserOrganizationList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsUserOrganizationList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


