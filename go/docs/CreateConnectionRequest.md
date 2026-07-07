# CreateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the connection | [optional] 
**EmailDomains** | Pointer to **[]string** | EmailDomains associated with the connection for SP-initiated SSO discovery. Optional; empty/unset falls through to the column default (empty array). | [optional] 
**Name** | Pointer to **string** | Name of the connection | [optional] 
**PublicName** | Pointer to **string** | PublicName is the customer-controlled label shown to end users in the SSO discovery picker. Optional; empty/unset falls through to the column default (an auto-generated &#x60;sso-&lt;hex&gt;&#x60; value). | [optional] 
**Saml** | Pointer to [**RoutesV3CreateConnectionRequestSaml**](RoutesV3CreateConnectionRequestSaml.md) |  | [optional] 
**SessionSettings** | Pointer to [**ModelsConnectionSessionSettings**](ModelsConnectionSessionSettings.md) |  | [optional] 

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

### GetEmailDomains

`func (o *CreateConnectionRequest) GetEmailDomains() []string`

GetEmailDomains returns the EmailDomains field if non-nil, zero value otherwise.

### GetEmailDomainsOk

`func (o *CreateConnectionRequest) GetEmailDomainsOk() (*[]string, bool)`

GetEmailDomainsOk returns a tuple with the EmailDomains field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailDomains

`func (o *CreateConnectionRequest) SetEmailDomains(v []string)`

SetEmailDomains sets EmailDomains field to given value.

### HasEmailDomains

`func (o *CreateConnectionRequest) HasEmailDomains() bool`

HasEmailDomains returns a boolean if a field has been set.

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

### GetPublicName

`func (o *CreateConnectionRequest) GetPublicName() string`

GetPublicName returns the PublicName field if non-nil, zero value otherwise.

### GetPublicNameOk

`func (o *CreateConnectionRequest) GetPublicNameOk() (*string, bool)`

GetPublicNameOk returns a tuple with the PublicName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicName

`func (o *CreateConnectionRequest) SetPublicName(v string)`

SetPublicName sets PublicName field to given value.

### HasPublicName

`func (o *CreateConnectionRequest) HasPublicName() bool`

HasPublicName returns a boolean if a field has been set.

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

### GetSessionSettings

`func (o *CreateConnectionRequest) GetSessionSettings() ModelsConnectionSessionSettings`

GetSessionSettings returns the SessionSettings field if non-nil, zero value otherwise.

### GetSessionSettingsOk

`func (o *CreateConnectionRequest) GetSessionSettingsOk() (*ModelsConnectionSessionSettings, bool)`

GetSessionSettingsOk returns a tuple with the SessionSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSessionSettings

`func (o *CreateConnectionRequest) SetSessionSettings(v ModelsConnectionSessionSettings)`

SetSessionSettings sets SessionSettings field to given value.

### HasSessionSettings

`func (o *CreateConnectionRequest) HasSessionSettings() bool`

HasSessionSettings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


