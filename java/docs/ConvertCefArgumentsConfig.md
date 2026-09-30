

# ConvertCefArgumentsConfig


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**columns** | **Map&lt;String, String&gt;** | Custom CEF-key -&gt; output-column map; entries override the preset. |  [optional] |
|**continuationMarker** | **String** | Collector continuation marker, e.g. \&quot;#LF#\&quot; or \&quot;#012\&quot;; \&quot;\&quot; disables continuation handling. |  [optional] |
|**continuationMode** | **String** | \&quot;spill\&quot; (default), \&quot;keep\&quot;, or \&quot;newline\&quot;. |  [optional] |
|**dialect** | **String** | \&quot;cef\&quot; (spec-faithful, default) or \&quot;legacy_kv\&quot; (bug-compat with jq CEF parsers). |  [optional] |
|**emptyToNull** | **Boolean** | Write empty-string values as null. Default false. |  [optional] |
|**envelope** | **Map&lt;String, String&gt;** | Output field -&gt; record path (JSONPath), copied verbatim; missing -&gt; null. |  [optional] |
|**headerFields** | **List&lt;String&gt;** | Exactly 7 output names for the header slots; default per preset. |  [optional] |
|**isoDateColumns** | **List&lt;String&gt;** | Output columns rewritten \&quot;YYYY/MM/DD HH:MM:SS\&quot; -&gt; \&quot;YYYY-MM-DDTHH:MM:SSZ\&quot;. |  [optional] |
|**key** | **String** | Source key holding the CEF line (JSONPath). Default \&quot;message\&quot;. |  [optional] |
|**numericColumns** | **List&lt;String&gt;** | Output columns coerced to number (invalid -&gt; null); unset &#x3D; preset default, [] &#x3D; off. |  [optional] |
|**outputKey** | **String** | Target key when output_mode is \&quot;under_key\&quot;. |  [optional] |
|**outputMode** | **String** | \&quot;replace\&quot; (default), \&quot;merge\&quot;, or \&quot;under_key\&quot;. |  [optional] |
|**overflowField** | **String** | Unmapped keys joined into this field; \&quot;\&quot; emits unmapped keys as individual fields. |  [optional] |
|**overflowSeparator** | **String** | Separator between overflow entries. Default \&quot;;\&quot;. |  [optional] |
|**preset** | **String** | \&quot;\&quot; (none), \&quot;cef_full_names\&quot;, or \&quot;common_security_log\&quot;. |  [optional] |
|**resolveLabels** | **Boolean** | Promote csN/csNLabel-style pairs into fields named by the label. Default false. |  [optional] |
|**strict** | **Boolean** | Fail the record on structural problems instead of best-effort parsing. Default false. |  [optional] |
|**stripQuotes** | **Boolean** | Remove one leading+trailing double-quote from values that carry both. Default false. |  [optional] |
|**warningsKey** | **String** | Write parse warnings as a string array under this key; \&quot;\&quot; (default) omits them. |  [optional] |



