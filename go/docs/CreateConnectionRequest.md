# CreateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the connection | [optional] 
**Name** | Pointer to **string** | Name of the connection | [optional] 
**Saml** | Pointer to [**RoutesV3CreateConnectionRequestSaml**](RoutesV3CreateConnectionRequestSaml.md) |  | [optional] 

## Methods

### NewCreateConnectionRequest

`func NewCreateConnectionRequest() *CreateConnectionRequest`

NewCreateConnectionRequest instantiates a new CreateConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateConnectionRequestWithDefaults

`func NewCreateConnectionRequestWithDefaults() *CreateConnectionRequest`

NewCreateConnectionRequestWithDefaults instantiates a new CreateConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CreateConnectionRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateConnectionRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateConnectionRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateConnectionRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *CreateConnectionRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateConnectionRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateConnectionRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateConnectionRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSaml

`func (o *CreateConnectionRequest) GetSaml() RoutesV3CreateConnectionRequestSaml`

GetSaml returns the Saml field if non-nil, zero value otherwise.

### GetSamlOk

`func (o *CreateConnectionRequest) GetSamlOk() (*RoutesV3CreateConnectionRequestSaml, bool)`

GetSamlOk returns a tuple with the Saml field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaml

`func (o *CreateConnectionRequest) SetSaml(v RoutesV3CreateConnectionRequestSaml)`

SetSaml sets Saml field to given value.

### HasSaml

`func (o *CreateConnectionRequest) HasSaml() bool`

HasSaml returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


