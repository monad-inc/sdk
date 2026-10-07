# IbmQradarHTTPSVariant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaCertificate** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**InsecureSkipVerify** | Pointer to **bool** | Whether to skip TLS certificate verification (not recommended for production). | [optional] 

## Methods

### NewIbmQradarHTTPSVariant

`func NewIbmQradarHTTPSVariant() *IbmQradarHTTPSVariant`

NewIbmQradarHTTPSVariant instantiates a new IbmQradarHTTPSVariant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIbmQradarHTTPSVariantWithDefaults

`func NewIbmQradarHTTPSVariantWithDefaults() *IbmQradarHTTPSVariant`

NewIbmQradarHTTPSVariantWithDefaults instantiates a new IbmQradarHTTPSVariant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCaCertificate

`func (o *IbmQradarHTTPSVariant) GetCaCertificate() ModelsSecret`

GetCaCertificate returns the CaCertificate field if non-nil, zero value otherwise.

### GetCaCertificateOk

`func (o *IbmQradarHTTPSVariant) GetCaCertificateOk() (*ModelsSecret, bool)`

GetCaCertificateOk returns a tuple with the CaCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaCertificate

`func (o *IbmQradarHTTPSVariant) SetCaCertificate(v ModelsSecret)`

SetCaCertificate sets CaCertificate field to given value.

### HasCaCertificate

`func (o *IbmQradarHTTPSVariant) HasCaCertificate() bool`

HasCaCertificate returns a boolean if a field has been set.

### GetInsecureSkipVerify

`func (o *IbmQradarHTTPSVariant) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *IbmQradarHTTPSVariant) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *IbmQradarHTTPSVariant) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *IbmQradarHTTPSVariant) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


