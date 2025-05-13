// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { EnrichmentConnectorMeta } from '../models/EnrichmentConnectorMeta';

/**
 * no description
 */
export class EnrichmentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get enrichment config meta
     * Get enrichment config meta
     * @param organizationId Organization ID
     * @param enrichmentTypeId Enrichment type ID
     */
    public async v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet(organizationId: string, enrichmentTypeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnrichmentsApi", "v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet", "organizationId");
        }


        // verify required parameter 'enrichmentTypeId' is not null or undefined
        if (enrichmentTypeId === null || enrichmentTypeId === undefined) {
            throw new RequiredError("EnrichmentsApi", "v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet", "enrichmentTypeId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments_meta/{enrichment_type_id}'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)))
            .replace('{' + 'enrichment_type_id' + '}', encodeURIComponent(String(enrichmentTypeId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List available enrichment types
     * List enrichments
     * @param organizationId Organization ID
     */
    public async v3OrganizationIdEnrichmentsMetaGet(organizationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'organizationId' is not null or undefined
        if (organizationId === null || organizationId === undefined) {
            throw new RequiredError("EnrichmentsApi", "v3OrganizationIdEnrichmentsMetaGet", "organizationId");
        }


        // Path Params
        const localVarPath = '/v3/{organization_id}/enrichments_meta'
            .replace('{' + 'organization_id' + '}', encodeURIComponent(String(organizationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class EnrichmentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsMetaEnrichmentTypeIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EnrichmentConnectorMeta >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EnrichmentConnectorMeta = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnrichmentConnectorMeta", ""
            ) as EnrichmentConnectorMeta;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Enrichment type not found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EnrichmentConnectorMeta = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EnrichmentConnectorMeta", ""
            ) as EnrichmentConnectorMeta;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v3OrganizationIdEnrichmentsMetaGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v3OrganizationIdEnrichmentsMetaGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<EnrichmentConnectorMeta> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EnrichmentConnectorMeta> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EnrichmentConnectorMeta>", ""
            ) as Array<EnrichmentConnectorMeta>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EnrichmentConnectorMeta> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EnrichmentConnectorMeta>", ""
            ) as Array<EnrichmentConnectorMeta>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
