# ModelsResourceShareChangeSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to [**[]ModelsResourceShare**](ModelsResourceShare.md) | Shares newly created by the request. | [optional] 
**Revoked** | Pointer to [**[]ModelsResourceShare**](ModelsResourceShare.md) | Shares revoked (deleted) by the request. | [optional] 
**ShareWithAllNewChildren** | Pointer to **bool** | The resource&#39;s auto-share policy state after the request. | [optional] 

## Methods

### NewModelsResourceShareChangeSet

`func NewModelsResourceShareChangeSet() *ModelsResourceShareChangeSet`

NewModelsResourceShareChangeSet instantiates a new ModelsResourceShareChangeSet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsResourceShareChangeSetWithDefaults

`func NewModelsResourceShareChangeSetWithDefaults() *ModelsResourceShareChangeSet`

NewModelsResourceShareChangeSetWithDefaults instantiates a new ModelsResourceShareChangeSet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *ModelsResourceShareChangeSet) GetCreated() []ModelsResourceShare`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ModelsResourceShareChangeSet) GetCreatedOk() (*[]ModelsResourceShare, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ModelsResourceShareChangeSet) SetCreated(v []ModelsResourceShare)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ModelsResourceShareChangeSet) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetRevoked

`func (o *ModelsResourceShareChangeSet) GetRevoked() []ModelsResourceShare`

GetRevoked returns the Revoked field if non-nil, zero value otherwise.

### GetRevokedOk

`func (o *ModelsResourceShareChangeSet) GetRevokedOk() (*[]ModelsResourceShare, bool)`

GetRevokedOk returns a tuple with the Revoked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevoked

`func (o *ModelsResourceShareChangeSet) SetRevoked(v []ModelsResourceShare)`

SetRevoked sets Revoked field to given value.

### HasRevoked

`func (o *ModelsResourceShareChangeSet) HasRevoked() bool`

HasRevoked returns a boolean if a field has been set.

### GetShareWithAllNewChildren

`func (o *ModelsResourceShareChangeSet) GetShareWithAllNewChildren() bool`

GetShareWithAllNewChildren returns the ShareWithAllNewChildren field if non-nil, zero value otherwise.

### GetShareWithAllNewChildrenOk

`func (o *ModelsResourceShareChangeSet) GetShareWithAllNewChildrenOk() (*bool, bool)`

GetShareWithAllNewChildrenOk returns a tuple with the ShareWithAllNewChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareWithAllNewChildren

`func (o *ModelsResourceShareChangeSet) SetShareWithAllNewChildren(v bool)`

SetShareWithAllNewChildren sets ShareWithAllNewChildren field to given value.

### HasShareWithAllNewChildren

`func (o *ModelsResourceShareChangeSet) HasShareWithAllNewChildren() bool`

HasShareWithAllNewChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


