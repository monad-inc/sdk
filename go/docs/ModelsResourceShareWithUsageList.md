# ModelsResourceShareWithUsageList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResourceShares** | Pointer to [**[]ModelsResourceShareWithUsage**](ModelsResourceShareWithUsage.md) | The shares of a single resource, each with its usage flag. | [optional] 
**ShareWithAllNewChildren** | Pointer to **bool** | Whether the resource&#39;s policy auto-shares it with new direct children. | [optional] 

## Methods

### NewModelsResourceShareWithUsageList

`func NewModelsResourceShareWithUsageList() *ModelsResourceShareWithUsageList`

NewModelsResourceShareWithUsageList instantiates a new ModelsResourceShareWithUsageList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceShareWithUsageListWithDefaults

`func NewModelsResourceShareWithUsageListWithDefaults() *ModelsResourceShareWithUsageList`

NewModelsResourceShareWithUsageListWithDefaults instantiates a new ModelsResourceShareWithUsageList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResourceShares

`func (o *ModelsResourceShareWithUsageList) GetResourceShares() []ModelsResourceShareWithUsage`

GetResourceShares returns the ResourceShares field if non-nil, zero value otherwise.

### GetResourceSharesOk

`func (o *ModelsResourceShareWithUsageList) GetResourceSharesOk() (*[]ModelsResourceShareWithUsage, bool)`

GetResourceSharesOk returns a tuple with the ResourceShares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceShares

`func (o *ModelsResourceShareWithUsageList) SetResourceShares(v []ModelsResourceShareWithUsage)`

SetResourceShares sets ResourceShares field to given value.

### HasResourceShares

`func (o *ModelsResourceShareWithUsageList) HasResourceShares() bool`

HasResourceShares returns a boolean if a field has been set.

### GetShareWithAllNewChildren

`func (o *ModelsResourceShareWithUsageList) GetShareWithAllNewChildren() bool`

GetShareWithAllNewChildren returns the ShareWithAllNewChildren field if non-nil, zero value otherwise.

### GetShareWithAllNewChildrenOk

`func (o *ModelsResourceShareWithUsageList) GetShareWithAllNewChildrenOk() (*bool, bool)`

GetShareWithAllNewChildrenOk returns a tuple with the ShareWithAllNewChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareWithAllNewChildren

`func (o *ModelsResourceShareWithUsageList) SetShareWithAllNewChildren(v bool)`

SetShareWithAllNewChildren sets ShareWithAllNewChildren field to given value.

### HasShareWithAllNewChildren

`func (o *ModelsResourceShareWithUsageList) HasShareWithAllNewChildren() bool`

HasShareWithAllNewChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


