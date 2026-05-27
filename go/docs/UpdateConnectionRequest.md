# UpdateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Connection Description to be updated | [optional] 
**Name** | Pointer to **string** | Connection Name to be updated | [optional] 
**PublicName** | Pointer to **string** | PublicName is the customer-facing label shown to end users in the SSO discovery picker. Optional; nil preserves the existing value, non-nil overwrites. | [optional] 

## Methods

### NewUpdateConnectionRequest

`func NewUpdateConnectionRequest() *UpdateConnectionRequest`

NewUpdateConnectionRequest instantiates a new UpdateConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateConnectionRequestWithDefaults

`func NewUpdateConnectionRequestWithDefaults() *UpdateConnectionRequest`

NewUpdateConnectionRequestWithDefaults instantiates a new UpdateConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *UpdateConnectionRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateConnectionRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateConnectionRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateConnectionRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *UpdateConnectionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateConnectionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateConnectionRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateConnectionRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPublicName

`func (o *UpdateConnectionRequest) GetPublicName() string`

GetPublicName returns the PublicName field if non-nil, zero value otherwise.

### GetPublicNameOk

`func (o *UpdateConnectionRequest) GetPublicNameOk() (*string, bool)`

GetPublicNameOk returns a tuple with the PublicName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicName

`func (o *UpdateConnectionRequest) SetPublicName(v string)`

SetPublicName sets PublicName field to given value.

### HasPublicName

`func (o *UpdateConnectionRequest) HasPublicName() bool`

HasPublicName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


