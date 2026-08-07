# ModelsReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** | Name is the referenced resource&#39;s display name, filled at read time on component responses. Never persisted: writes rebuild references from request state (the name is display sugar and would go stale), and an empty name is omitted from the stored JSON. | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Shared** | Pointer to **bool** | Shared reports that the referenced resource is owned by an org other than the component&#39;s owner — a directly-shared secret the component pulls in. Same read-time-only contract as Name: computed on responses, never persisted (omitted when false). | [optional] 

## Methods

### NewModelsReference

`func NewModelsReference() *ModelsReference`

NewModelsReference instantiates a new ModelsReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsReferenceWithDefaults

`func NewModelsReferenceWithDefaults() *ModelsReference`

NewModelsReferenceWithDefaults instantiates a new ModelsReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ModelsReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ModelsReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsReference) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsReference) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsReference) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsReference) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetShared

`func (o *ModelsReference) GetShared() bool`

GetShared returns the Shared field if non-nil, zero value otherwise.

### GetSharedOk

`func (o *ModelsReference) GetSharedOk() (*bool, bool)`

GetSharedOk returns a tuple with the Shared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShared

`func (o *ModelsReference) SetShared(v bool)`

SetShared sets Shared field to given value.

### HasShared

`func (o *ModelsReference) HasShared() bool`

HasShared returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


