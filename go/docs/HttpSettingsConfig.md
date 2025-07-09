# HttpSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | Pointer to **string** | The full URL of the HTTP endpoint to send data to. Must include the scheme (http or https). | [optional] 
**Headers** | Pointer to [**[]HttpHeaders**](HttpHeaders.md) | Non secret headers | [optional] 
**MaxBatchDataSize** | Pointer to **int32** | The maximum size in KB for a single batch of data to be sent in one request. This does not effect the single payload structure. | [optional] 
**MaxBatchRecordCount** | Pointer to **int32** | The maximum number of records to include in a single batch. For single payload structure, this is automatically set to 1. For other payload structures, this determines the maximum number of records sent in a single request. | [optional] 
**Method** | Pointer to **string** | The HTTP method to use for requests (GET, POST, PUT, PATCH, or DELETE). | [optional] 
**PayloadStructure** | Pointer to **string** | Determines how the payload is structured. &#39;single&#39; sends each record as a separate request, &#39;array&#39; sends multiple records as an array, &#39;wrapped&#39; sends multiple records within a wrapper object. | [optional] 
**RateLimit** | Pointer to **int32** | Maximum number of requests per second to send to the endpoint. | [optional] 
**TlsSkipVerify** | Pointer to **bool** | Skip TLS verification. | [optional] 
**WrapperKey** | Pointer to **string** | The key to use for wrapping the payload when PayloadStructure is set to &#39;wrapped&#39;. | [optional] 

## Methods

### NewHttpSettingsConfig

`func NewHttpSettingsConfig() *HttpSettingsConfig`

NewHttpSettingsConfig instantiates a new HttpSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpSettingsConfigWithDefaults

`func NewHttpSettingsConfigWithDefaults() *HttpSettingsConfig`

NewHttpSettingsConfigWithDefaults instantiates a new HttpSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpoint

`func (o *HttpSettingsConfig) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *HttpSettingsConfig) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *HttpSettingsConfig) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *HttpSettingsConfig) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetHeaders

`func (o *HttpSettingsConfig) GetHeaders() []HttpHeaders`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *HttpSettingsConfig) GetHeadersOk() (*[]HttpHeaders, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *HttpSettingsConfig) SetHeaders(v []HttpHeaders)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *HttpSettingsConfig) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetMaxBatchDataSize

`func (o *HttpSettingsConfig) GetMaxBatchDataSize() int32`

GetMaxBatchDataSize returns the MaxBatchDataSize field if non-nil, zero value otherwise.

### GetMaxBatchDataSizeOk

`func (o *HttpSettingsConfig) GetMaxBatchDataSizeOk() (*int32, bool)`

GetMaxBatchDataSizeOk returns a tuple with the MaxBatchDataSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxBatchDataSize

`func (o *HttpSettingsConfig) SetMaxBatchDataSize(v int32)`

SetMaxBatchDataSize sets MaxBatchDataSize field to given value.

### HasMaxBatchDataSize

`func (o *HttpSettingsConfig) HasMaxBatchDataSize() bool`

HasMaxBatchDataSize returns a boolean if a field has been set.

### GetMaxBatchRecordCount

`func (o *HttpSettingsConfig) GetMaxBatchRecordCount() int32`

GetMaxBatchRecordCount returns the MaxBatchRecordCount field if non-nil, zero value otherwise.

### GetMaxBatchRecordCountOk

`func (o *HttpSettingsConfig) GetMaxBatchRecordCountOk() (*int32, bool)`

GetMaxBatchRecordCountOk returns a tuple with the MaxBatchRecordCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxBatchRecordCount

`func (o *HttpSettingsConfig) SetMaxBatchRecordCount(v int32)`

SetMaxBatchRecordCount sets MaxBatchRecordCount field to given value.

### HasMaxBatchRecordCount

`func (o *HttpSettingsConfig) HasMaxBatchRecordCount() bool`

HasMaxBatchRecordCount returns a boolean if a field has been set.

### GetMethod

`func (o *HttpSettingsConfig) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *HttpSettingsConfig) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *HttpSettingsConfig) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *HttpSettingsConfig) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetPayloadStructure

`func (o *HttpSettingsConfig) GetPayloadStructure() string`

GetPayloadStructure returns the PayloadStructure field if non-nil, zero value otherwise.

### GetPayloadStructureOk

`func (o *HttpSettingsConfig) GetPayloadStructureOk() (*string, bool)`

GetPayloadStructureOk returns a tuple with the PayloadStructure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayloadStructure

`func (o *HttpSettingsConfig) SetPayloadStructure(v string)`

SetPayloadStructure sets PayloadStructure field to given value.

### HasPayloadStructure

`func (o *HttpSettingsConfig) HasPayloadStructure() bool`

HasPayloadStructure returns a boolean if a field has been set.

### GetRateLimit

`func (o *HttpSettingsConfig) GetRateLimit() int32`

GetRateLimit returns the RateLimit field if non-nil, zero value otherwise.

### GetRateLimitOk

`func (o *HttpSettingsConfig) GetRateLimitOk() (*int32, bool)`

GetRateLimitOk returns a tuple with the RateLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLimit

`func (o *HttpSettingsConfig) SetRateLimit(v int32)`

SetRateLimit sets RateLimit field to given value.

### HasRateLimit

`func (o *HttpSettingsConfig) HasRateLimit() bool`

HasRateLimit returns a boolean if a field has been set.

### GetTlsSkipVerify

`func (o *HttpSettingsConfig) GetTlsSkipVerify() bool`

GetTlsSkipVerify returns the TlsSkipVerify field if non-nil, zero value otherwise.

### GetTlsSkipVerifyOk

`func (o *HttpSettingsConfig) GetTlsSkipVerifyOk() (*bool, bool)`

GetTlsSkipVerifyOk returns a tuple with the TlsSkipVerify field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsSkipVerify

`func (o *HttpSettingsConfig) SetTlsSkipVerify(v bool)`

SetTlsSkipVerify sets TlsSkipVerify field to given value.

### HasTlsSkipVerify

`func (o *HttpSettingsConfig) HasTlsSkipVerify() bool`

HasTlsSkipVerify returns a boolean if a field has been set.

### GetWrapperKey

`func (o *HttpSettingsConfig) GetWrapperKey() string`

GetWrapperKey returns the WrapperKey field if non-nil, zero value otherwise.

### GetWrapperKeyOk

`func (o *HttpSettingsConfig) GetWrapperKeyOk() (*string, bool)`

GetWrapperKeyOk returns a tuple with the WrapperKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWrapperKey

`func (o *HttpSettingsConfig) SetWrapperKey(v string)`

SetWrapperKey sets WrapperKey field to given value.

### HasWrapperKey

`func (o *HttpSettingsConfig) HasWrapperKey() bool`

HasWrapperKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


