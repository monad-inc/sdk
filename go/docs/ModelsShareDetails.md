# ModelsShareDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnerOrganizationId** | Pointer to **string** | OwnerOrganizationID is the org that owns the resource; set only when SharedWithMe. | [optional] 
**SharedWithChildren** | Pointer to **bool** | SharedWithChildren is true when the requesting org owns the resource and has shared it out to at least one child org. | [optional] 
**SharedWithMe** | Pointer to **bool** | SharedWithMe is true when the resource is shared to the requesting org by a parent org. | [optional] 

## Methods

### NewModelsShareDetails

`func NewModelsShareDetails() *ModelsShareDetails`

NewModelsShareDetails instantiates a new ModelsShareDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsShareDetailsWithDefaults

`func NewModelsShareDetailsWithDefaults() *ModelsShareDetails`

NewModelsShareDetailsWithDefaults instantiates a new ModelsShareDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnerOrganizationId

`func (o *ModelsShareDetails) GetOwnerOrganizationId() string`

GetOwnerOrganizationId returns the OwnerOrganizationId field if non-nil, zero value otherwise.

### GetOwnerOrganizationIdOk

`func (o *ModelsShareDetails) GetOwnerOrganizationIdOk() (*string, bool)`

GetOwnerOrganizationIdOk returns a tuple with the OwnerOrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOrganizationId

`func (o *ModelsShareDetails) SetOwnerOrganizationId(v string)`

SetOwnerOrganizationId sets OwnerOrganizationId field to given value.

### HasOwnerOrganizationId

`func (o *ModelsShareDetails) HasOwnerOrganizationId() bool`

HasOwnerOrganizationId returns a boolean if a field has been set.

### GetSharedWithChildren

`func (o *ModelsShareDetails) GetSharedWithChildren() bool`

GetSharedWithChildren returns the SharedWithChildren field if non-nil, zero value otherwise.

### GetSharedWithChildrenOk

`func (o *ModelsShareDetails) GetSharedWithChildrenOk() (*bool, bool)`

GetSharedWithChildrenOk returns a tuple with the SharedWithChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedWithChildren

`func (o *ModelsShareDetails) SetSharedWithChildren(v bool)`

SetSharedWithChildren sets SharedWithChildren field to given value.

### HasSharedWithChildren

`func (o *ModelsShareDetails) HasSharedWithChildren() bool`

HasSharedWithChildren returns a boolean if a field has been set.

### GetSharedWithMe

`func (o *ModelsShareDetails) GetSharedWithMe() bool`

GetSharedWithMe returns the SharedWithMe field if non-nil, zero value otherwise.

### GetSharedWithMeOk

`func (o *ModelsShareDetails) GetSharedWithMeOk() (*bool, bool)`

GetSharedWithMeOk returns a tuple with the SharedWithMe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedWithMe

`func (o *ModelsShareDetails) SetSharedWithMe(v bool)`

SetSharedWithMe sets SharedWithMe field to given value.

### HasSharedWithMe

`func (o *ModelsShareDetails) HasSharedWithMe() bool`

HasSharedWithMe returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


