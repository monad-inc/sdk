# ScannerDelimitedVariant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Delimiter** | **string** | Single-character field delimiter (e.g. &#39;,&#39;). | 
**Headers** | **[]string** | Optional ordered list of column headers. | 

## Methods

### NewScannerDelimitedVariant

`func NewScannerDelimitedVariant(delimiter string, headers []string, ) *ScannerDelimitedVariant`

NewScannerDelimitedVariant instantiates a new ScannerDelimitedVariant object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScannerDelimitedVariantWithDefaults

`func NewScannerDelimitedVariantWithDefaults() *ScannerDelimitedVariant`

NewScannerDelimitedVariantWithDefaults instantiates a new ScannerDelimitedVariant object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelimiter

`func (o *ScannerDelimitedVariant) GetDelimiter() string`

GetDelimiter returns the Delimiter field if non-nil, zero value otherwise.

### GetDelimiterOk

`func (o *ScannerDelimitedVariant) GetDelimiterOk() (*string, bool)`

GetDelimiterOk returns a tuple with the Delimiter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimiter

`func (o *ScannerDelimitedVariant) SetDelimiter(v string)`

SetDelimiter sets Delimiter field to given value.


### GetHeaders

`func (o *ScannerDelimitedVariant) GetHeaders() []string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *ScannerDelimitedVariant) GetHeadersOk() (*[]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *ScannerDelimitedVariant) SetHeaders(v []string)`

SetHeaders sets Headers field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


