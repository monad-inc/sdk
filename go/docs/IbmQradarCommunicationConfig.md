# IbmQradarCommunicationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Https** | Pointer to [**IbmQradarHTTPSVariant**](IbmQradarHTTPSVariant.md) |  | [optional] 
**HttpsMtls** | Pointer to [**IbmQradarHTTPSMTLSVariant**](IbmQradarHTTPSMTLSVariant.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewIbmQradarCommunicationConfig

`func NewIbmQradarCommunicationConfig(type_ string, ) *IbmQradarCommunicationConfig`

NewIbmQradarCommunicationConfig instantiates a new IbmQradarCommunicationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIbmQradarCommunicationConfigWithDefaults

`func NewIbmQradarCommunicationConfigWithDefaults() *IbmQradarCommunicationConfig`

NewIbmQradarCommunicationConfigWithDefaults instantiates a new IbmQradarCommunicationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHttps

`func (o *IbmQradarCommunicationConfig) GetHttps() IbmQradarHTTPSVariant`

GetHttps returns the Https field if non-nil, zero value otherwise.

### GetHttpsOk

`func (o *IbmQradarCommunicationConfig) GetHttpsOk() (*IbmQradarHTTPSVariant, bool)`

GetHttpsOk returns a tuple with the Https field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttps

`func (o *IbmQradarCommunicationConfig) SetHttps(v IbmQradarHTTPSVariant)`

SetHttps sets Https field to given value.

### HasHttps

`func (o *IbmQradarCommunicationConfig) HasHttps() bool`

HasHttps returns a boolean if a field has been set.

### GetHttpsMtls

`func (o *IbmQradarCommunicationConfig) GetHttpsMtls() IbmQradarHTTPSMTLSVariant`

GetHttpsMtls returns the HttpsMtls field if non-nil, zero value otherwise.

### GetHttpsMtlsOk

`func (o *IbmQradarCommunicationConfig) GetHttpsMtlsOk() (*IbmQradarHTTPSMTLSVariant, bool)`

GetHttpsMtlsOk returns a tuple with the HttpsMtls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpsMtls

`func (o *IbmQradarCommunicationConfig) SetHttpsMtls(v IbmQradarHTTPSMTLSVariant)`

SetHttpsMtls sets HttpsMtls field to given value.

### HasHttpsMtls

`func (o *IbmQradarCommunicationConfig) HasHttpsMtls() bool`

HasHttpsMtls returns a boolean if a field has been set.

### GetType

`func (o *IbmQradarCommunicationConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IbmQradarCommunicationConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IbmQradarCommunicationConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


