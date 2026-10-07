# IbmQradarHTTPSMTLSVariant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaCertificate** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**ClientCertificate** | [**ModelsSecret**](ModelsSecret.md) |  | 
**ClientKey** | [**ModelsSecret**](ModelsSecret.md) |  | 
**InsecureSkipVerify** | Pointer to **bool** |  | [optional] 

## Methods

### NewIbmQradarHTTPSMTLSVariant

`func NewIbmQradarHTTPSMTLSVariant(clientCertificate ModelsSecret, clientKey ModelsSecret, ) *IbmQradarHTTPSMTLSVariant`

NewIbmQradarHTTPSMTLSVariant instantiates a new IbmQradarHTTPSMTLSVariant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIbmQradarHTTPSMTLSVariantWithDefaults

`func NewIbmQradarHTTPSMTLSVariantWithDefaults() *IbmQradarHTTPSMTLSVariant`

NewIbmQradarHTTPSMTLSVariantWithDefaults instantiates a new IbmQradarHTTPSMTLSVariant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCaCertificate

`func (o *IbmQradarHTTPSMTLSVariant) GetCaCertificate() ModelsSecret`

GetCaCertificate returns the CaCertificate field if non-nil, zero value otherwise.

### GetCaCertificateOk

`func (o *IbmQradarHTTPSMTLSVariant) GetCaCertificateOk() (*ModelsSecret, bool)`

GetCaCertificateOk returns a tuple with the CaCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaCertificate

`func (o *IbmQradarHTTPSMTLSVariant) SetCaCertificate(v ModelsSecret)`

SetCaCertificate sets CaCertificate field to given value.

### HasCaCertificate

`func (o *IbmQradarHTTPSMTLSVariant) HasCaCertificate() bool`

HasCaCertificate returns a boolean if a field has been set.

### GetClientCertificate

`func (o *IbmQradarHTTPSMTLSVariant) GetClientCertificate() ModelsSecret`

GetClientCertificate returns the ClientCertificate field if non-nil, zero value otherwise.

### GetClientCertificateOk

`func (o *IbmQradarHTTPSMTLSVariant) GetClientCertificateOk() (*ModelsSecret, bool)`

GetClientCertificateOk returns a tuple with the ClientCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientCertificate

`func (o *IbmQradarHTTPSMTLSVariant) SetClientCertificate(v ModelsSecret)`

SetClientCertificate sets ClientCertificate field to given value.


### GetClientKey

`func (o *IbmQradarHTTPSMTLSVariant) GetClientKey() ModelsSecret`

GetClientKey returns the ClientKey field if non-nil, zero value otherwise.

### GetClientKeyOk

`func (o *IbmQradarHTTPSMTLSVariant) GetClientKeyOk() (*ModelsSecret, bool)`

GetClientKeyOk returns a tuple with the ClientKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientKey

`func (o *IbmQradarHTTPSMTLSVariant) SetClientKey(v ModelsSecret)`

SetClientKey sets ClientKey field to given value.


### GetInsecureSkipVerify

`func (o *IbmQradarHTTPSMTLSVariant) GetInsecureSkipVerify() bool`

GetInsecureSkipVerify returns the InsecureSkipVerify field if non-nil, zero value otherwise.

### GetInsecureSkipVerifyOk

`func (o *IbmQradarHTTPSMTLSVariant) GetInsecureSkipVerifyOk() (*bool, bool)`

GetInsecureSkipVerifyOk returns a tuple with the InsecureSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsecureSkipVerify

`func (o *IbmQradarHTTPSMTLSVariant) SetInsecureSkipVerify(v bool)`

SetInsecureSkipVerify sets InsecureSkipVerify field to given value.

### HasInsecureSkipVerify

`func (o *IbmQradarHTTPSMTLSVariant) HasInsecureSkipVerify() bool`

HasInsecureSkipVerify returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


