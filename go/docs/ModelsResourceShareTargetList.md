# ModelsResourceShareTargetList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Organizations** | Pointer to [**[]ModelsResourceShareTarget**](ModelsResourceShareTarget.md) | The page of child orgs. | [optional] 
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**ShareWithAllNewChildren** | Pointer to **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 

## Methods

### NewModelsResourceShareTargetList

`func NewModelsResourceShareTargetList() *ModelsResourceShareTargetList`

NewModelsResourceShareTargetList instantiates a new ModelsResourceShareTargetList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceShareTargetListWithDefaults

`func NewModelsResourceShareTargetListWithDefaults() *ModelsResourceShareTargetList`

NewModelsResourceShareTargetListWithDefaults instantiates a new ModelsResourceShareTargetList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizations

`func (o *ModelsResourceShareTargetList) GetOrganizations() []ModelsResourceShareTarget`

GetOrganizations returns the Organizations field if non-nil, zero value otherwise.

### GetOrganizationsOk

`func (o *ModelsResourceShareTargetList) GetOrganizationsOk() (*[]ModelsResourceShareTarget, bool)`

GetOrganizationsOk returns a tuple with the Organizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizations

`func (o *ModelsResourceShareTargetList) SetOrganizations(v []ModelsResourceShareTarget)`

SetOrganizations sets Organizations field to given value.

### HasOrganizations

`func (o *ModelsResourceShareTargetList) HasOrganizations() bool`

HasOrganizations returns a boolean if a field has been set.

### GetPagination

`func (o *ModelsResourceShareTargetList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsResourceShareTargetList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsResourceShareTargetList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsResourceShareTargetList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetShareWithAllNewChildren

`func (o *ModelsResourceShareTargetList) GetShareWithAllNewChildren() bool`

GetShareWithAllNewChildren returns the ShareWithAllNewChildren field if non-nil, zero value otherwise.

### GetShareWithAllNewChildrenOk

`func (o *ModelsResourceShareTargetList) GetShareWithAllNewChildrenOk() (*bool, bool)`

GetShareWithAllNewChildrenOk returns a tuple with the ShareWithAllNewChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareWithAllNewChildren

`func (o *ModelsResourceShareTargetList) SetShareWithAllNewChildren(v bool)`

SetShareWithAllNewChildren sets ShareWithAllNewChildren field to given value.

### HasShareWithAllNewChildren

`func (o *ModelsResourceShareTargetList) HasShareWithAllNewChildren() bool`

HasShareWithAllNewChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


