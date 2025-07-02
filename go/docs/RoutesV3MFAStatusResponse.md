# RoutesV3MFAStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** |  | [optional] 
**Methods** | Pointer to [**[]AuthenticationtypesAuthenticationMethod**](AuthenticationtypesAuthenticationMethod.md) |  | [optional] 

## Methods

### NewRoutesV3MFAStatusResponse

`func NewRoutesV3MFAStatusResponse() *RoutesV3MFAStatusResponse`

NewRoutesV3MFAStatusResponse instantiates a new RoutesV3MFAStatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3MFAStatusResponseWithDefaults

`func NewRoutesV3MFAStatusResponseWithDefaults() *RoutesV3MFAStatusResponse`

NewRoutesV3MFAStatusResponseWithDefaults instantiates a new RoutesV3MFAStatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *RoutesV3MFAStatusResponse) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *RoutesV3MFAStatusResponse) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *RoutesV3MFAStatusResponse) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *RoutesV3MFAStatusResponse) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetMethods

`func (o *RoutesV3MFAStatusResponse) GetMethods() []AuthenticationtypesAuthenticationMethod`

GetMethods returns the Methods field if non-nil, zero value otherwise.

### GetMethodsOk

`func (o *RoutesV3MFAStatusResponse) GetMethodsOk() (*[]AuthenticationtypesAuthenticationMethod, bool)`

GetMethodsOk returns a tuple with the Methods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethods

`func (o *RoutesV3MFAStatusResponse) SetMethods(v []AuthenticationtypesAuthenticationMethod)`

SetMethods sets Methods field to given value.

### HasMethods

`func (o *RoutesV3MFAStatusResponse) HasMethods() bool`

HasMethods returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


