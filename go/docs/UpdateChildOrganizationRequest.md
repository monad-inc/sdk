# UpdateChildOrganizationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**FriendlyName** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** | Name, when non-empty, regenerates the immutable slug as &#x60;&lt;name&gt;-&lt;4hex&gt;&#x60;. | [optional] 

## Methods

### NewUpdateChildOrganizationRequest

`func NewUpdateChildOrganizationRequest() *UpdateChildOrganizationRequest`

NewUpdateChildOrganizationRequest instantiates a new UpdateChildOrganizationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateChildOrganizationRequestWithDefaults

`func NewUpdateChildOrganizationRequestWithDefaults() *UpdateChildOrganizationRequest`

NewUpdateChildOrganizationRequestWithDefaults instantiates a new UpdateChildOrganizationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *UpdateChildOrganizationRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdateChildOrganizationRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdateChildOrganizationRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdateChildOrganizationRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFriendlyName

`func (o *UpdateChildOrganizationRequest) GetFriendlyName() string`

GetFriendlyName returns the FriendlyName field if non-nil, zero value otherwise.

### GetFriendlyNameOk

`func (o *UpdateChildOrganizationRequest) GetFriendlyNameOk() (*string, bool)`

GetFriendlyNameOk returns a tuple with the FriendlyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriendlyName

`func (o *UpdateChildOrganizationRequest) SetFriendlyName(v string)`

SetFriendlyName sets FriendlyName field to given value.

### HasFriendlyName

`func (o *UpdateChildOrganizationRequest) HasFriendlyName() bool`

HasFriendlyName returns a boolean if a field has been set.

### GetName

`func (o *UpdateChildOrganizationRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateChildOrganizationRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateChildOrganizationRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdateChildOrganizationRequest) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


