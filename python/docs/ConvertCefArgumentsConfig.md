# ConvertCefArgumentsConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **Dict[str, str]** | Custom CEF-key -&gt; output-column map; entries override the preset. | [optional] 
**continuation_marker** | **str** | Collector continuation marker, e.g. \&quot;#LF#\&quot; or \&quot;#012\&quot;; \&quot;\&quot; disables continuation handling. | [optional] 
**continuation_mode** | **str** | \&quot;spill\&quot; (default), \&quot;keep\&quot;, or \&quot;newline\&quot;. | [optional] 
**dialect** | **str** | \&quot;cef\&quot; (spec-faithful, default) or \&quot;legacy_kv\&quot; (bug-compat with jq CEF parsers). | [optional] 
**empty_to_null** | **bool** | Write empty-string values as null. Default false. | [optional] 
**envelope** | **Dict[str, str]** | Output field -&gt; record path (JSONPath), copied verbatim; missing -&gt; null. | [optional] 
**header_fields** | **List[str]** | Exactly 7 output names for the header slots; default per preset. | [optional] 
**iso_date_columns** | **List[str]** | Output columns rewritten \&quot;YYYY/MM/DD HH:MM:SS\&quot; -&gt; \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;. | [optional] 
**key** | **str** | Source key holding the CEF line (JSONPath). Default \&quot;message\&quot;. | [optional] 
**numeric_columns** | **List[str]** | Output columns coerced to number (invalid -&gt; null); unset &#x3D; preset default, [] &#x3D; off. | [optional] 
**output_key** | **str** | Target key when output_mode is \&quot;under_key\&quot;. | [optional] 
**output_mode** | **str** | \&quot;replace\&quot; (default), \&quot;merge\&quot;, or \&quot;under_key\&quot;. | [optional] 
**overflow_field** | **str** | Unmapped keys joined into this field; \&quot;\&quot; emits unmapped keys as individual fields. | [optional] 
**overflow_separator** | **str** | Separator between overflow entries. Default \&quot;;\&quot;. | [optional] 
**preset** | **str** | \&quot;\&quot; (none), \&quot;cef_full_names\&quot;, or \&quot;common_security_log\&quot;. | [optional] 
**resolve_labels** | **bool** | Promote csN/csNLabel-style pairs into fields named by the label. Default false. | [optional] 
**strict** | **bool** | Fail the record on structural problems instead of best-effort parsing. Default false. | [optional] 
**strip_quotes** | **bool** | Remove one leading+trailing double-quote from values that carry both. Default false. | [optional] 
**warnings_key** | **str** | Write parse warnings as a string array under this key; \&quot;\&quot; (default) omits them. | [optional] 

## Example

```python
from monad.models.convert_cef_arguments_config import ConvertCefArgumentsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertCefArgumentsConfig from a JSON string
convert_cef_arguments_config_instance = ConvertCefArgumentsConfig.from_json(json)
# print the JSON string representation of the object
print(ConvertCefArgumentsConfig.to_json())

# convert the object into a dict
convert_cef_arguments_config_dict = convert_cef_arguments_config_instance.to_dict()
# create an instance of ConvertCefArgumentsConfig from a dict
convert_cef_arguments_config_from_dict = ConvertCefArgumentsConfig.from_dict(convert_cef_arguments_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


