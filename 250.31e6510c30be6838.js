"use strict";(self.webpackChunkticketing=self.webpackChunkticketing||[]).push([[250],{6250:(O,v,s)=>{s.r(v),s.d(v,{NestedAppAuthController:()=>E});var d=s(5861),R=s(8214),C=s(7979),m=s(4441),l=s(8593),w=s(2341),U=s(8404),N=s(9092),f=s(5500),p=s(5140),h=s(5841),y=s(9082),S=s(4498),P=s(544),g=s(7481);class b{constructor(e,t,n,o){this.clientId=e,this.clientCapabilities=t,this.crypto=n,this.logger=o}toNaaTokenRequest(e){let t;t=void 0===e.extraQueryParameters?new Map:new Map(Object.entries(e.extraQueryParameters));const o=(new U.H).addClientCapabilitiesToClaims(e.claims,this.clientCapabilities);return{platformBrokerId:e.account?.homeAccountId,clientId:this.clientId,authority:e.authority,scope:e.scopes.join(" "),correlationId:void 0!==e.correlationId?e.correlationId:this.crypto.createNewGuid(),claims:N.x.isEmptyObj(o)?void 0:o,state:e.state,authenticationScheme:e.authenticationScheme||f.hO.BEARER,extraParameters:t}}fromNaaTokenResponse(e,t,n){if(!t.token.id_token||!t.token.access_token)throw(0,p.zP)(h.PM);const o=new Date(1e3*(n+(t.token.expires_in||0))),i=y.Z_(t.token.id_token,this.crypto.base64Decode),c=this.fromNaaAccountInfo(t.account,i);return{authority:t.token.authority||c.environment,uniqueId:c.localAccountId,tenantId:c.tenantId,scopes:(t.token.scope||e.scope).split(" "),account:c,idToken:t.token.id_token,idTokenClaims:i,accessToken:t.token.access_token,fromCache:!0,expiresOn:o,tokenType:e.authenticationScheme||f.hO.BEARER,correlationId:e.correlationId,extExpiresOn:o,state:e.state}}fromNaaAccountInfo(e,t){const n=t||e.idTokenClaims,o=e.localAccountId||n?.oid||n?.sub||"",i=e.tenantId||n?.tid||"";return{homeAccountId:e.homeAccountId||`${o}.${i}`,environment:e.environment,tenantId:i,username:e.username||n?.preferred_username||"",localAccountId:o,name:e.name||n?.name,idToken:e.idToken,idTokenClaims:n}}fromBridgeError(e){if(!function B(T){return void 0!==T.status}(e))return new g.l4("unknown_error","An unknown error occurred");switch(e.status){case"USER_CANCEL":return new p.er(h.$R);case"NO_NETWORK":return new p.er(h.Mq);case"ACCOUNT_UNAVAILABLE":return new p.er(h.cX);case"DISABLED":return new p.er(h.Ls);case"NESTED_APP_AUTH_UNAVAILABLE":return new p.er(e.code||h.Ls,e.description);case"TRANSIENT_ERROR":case"PERSISTENT_ERROR":return new S.n(e.code,e.description);case"USER_INTERACTION_REQUIRED":return new P.Yo(e.code,e.description);default:return new g.l4(e.code,e.description)}}}const I_unsupportedMethod_code="unsupported_method",I_unsupportedMethod_desc="The PKCE code challenge and verifier could not be generated.";class r extends g.l4{constructor(e,t){super(e,t),Object.setPrototypeOf(this,r.prototype),this.name="NestedAppAuthError"}static createUnsupportedError(){return new r(I_unsupportedMethod_code,I_unsupportedMethod_desc)}}var x=s(4076),A=s(6097);class E{constructor(e){this.operatingContext=e;const t=this.operatingContext.getBridgeProxy();if(void 0===t)throw new Error("unexpected: bridgeProxy is undefined");this.bridgeProxy=t,this.config=e.getConfig(),this.logger=this.operatingContext.getLogger(),this.performanceClient=this.config.telemetry.client,this.browserCrypto=e.isBrowserEnvironment()?new w.Q(this.logger,this.performanceClient):R.d,this.eventHandler=new x.b(this.logger,this.browserCrypto),this.nestedAppAuthAdapter=new b(this.config.auth.clientId,this.config.auth.clientCapabilities,this.browserCrypto,this.logger)}getBrowserStorage(){throw r.createUnsupportedError()}getEventHandler(){return this.eventHandler}static createController(e){return(0,d.Z)(function*(){const t=new E(e);return Promise.resolve(t)})()}initialize(){return Promise.resolve()}acquireTokenInteractive(e){var t=this;return(0,d.Z)(function*(){t.eventHandler.emitEvent(A.t.ACQUIRE_TOKEN_START,l.s_.Popup,e);const n=t.performanceClient.startMeasurement(C.Ak.AcquireTokenPopup,e.correlationId);n?.add({nestedAppAuthRequest:!0});try{const o=t.nestedAppAuthAdapter.toNaaTokenRequest(e),i=m.I.nowSeconds(),c=yield t.bridgeProxy.getTokenInteractive(o),a=t.nestedAppAuthAdapter.fromNaaTokenResponse(o,c,i);return t.operatingContext.setActiveAccount(a.account),t.eventHandler.emitEvent(A.t.ACQUIRE_TOKEN_SUCCESS,l.s_.Popup,a),n.add({accessTokenSize:a.accessToken.length,idTokenSize:a.idToken.length}),n.end({success:!0,requestId:a.requestId}),a}catch(o){const i=t.nestedAppAuthAdapter.fromBridgeError(o);throw t.eventHandler.emitEvent(A.t.ACQUIRE_TOKEN_FAILURE,l.s_.Popup,null,o),n.end({errorCode:i.errorCode,subErrorCode:i.subError,success:!1}),i}})()}acquireTokenSilentInternal(e){var t=this;return(0,d.Z)(function*(){t.eventHandler.emitEvent(A.t.ACQUIRE_TOKEN_START,l.s_.Silent,e);const n=t.performanceClient.startMeasurement(C.Ak.SsoSilent,e.correlationId);n?.increment({visibilityChangeCount:0}),n?.add({nestedAppAuthRequest:!0});try{const o=t.nestedAppAuthAdapter.toNaaTokenRequest(e),i=m.I.nowSeconds(),c=yield t.bridgeProxy.getTokenSilent(o),a=t.nestedAppAuthAdapter.fromNaaTokenResponse(o,c,i);return t.operatingContext.setActiveAccount(a.account),t.eventHandler.emitEvent(A.t.ACQUIRE_TOKEN_SUCCESS,l.s_.Silent,a),n?.add({accessTokenSize:a.accessToken.length,idTokenSize:a.idToken.length}),n?.end({success:!0,requestId:a.requestId}),a}catch(o){const i=t.nestedAppAuthAdapter.fromBridgeError(o);throw t.eventHandler.emitEvent(A.t.ACQUIRE_TOKEN_FAILURE,l.s_.Silent,null,o),n?.end({errorCode:i.errorCode,subErrorCode:i.subError,success:!1}),i}})()}acquireTokenPopup(e){var t=this;return(0,d.Z)(function*(){return t.acquireTokenInteractive(e)})()}acquireTokenRedirect(e){throw r.createUnsupportedError()}acquireTokenSilent(e){var t=this;return(0,d.Z)(function*(){return t.acquireTokenSilentInternal(e)})()}acquireTokenByCode(e){throw r.createUnsupportedError()}acquireTokenNative(e,t,n){throw r.createUnsupportedError()}acquireTokenByRefreshToken(e,t){throw r.createUnsupportedError()}addEventCallback(e){return this.eventHandler.addEventCallback(e)}removeEventCallback(e){this.eventHandler.removeEventCallback(e)}addPerformanceCallback(e){throw r.createUnsupportedError()}removePerformanceCallback(e){throw r.createUnsupportedError()}enableAccountStorageEvents(){throw r.createUnsupportedError()}disableAccountStorageEvents(){throw r.createUnsupportedError()}getAccount(e){throw r.createUnsupportedError()}getAccountByHomeId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.homeAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByLocalId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.localAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByUsername(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.username===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAllAccounts(){const e=this.operatingContext.getActiveAccount();return void 0!==e?[this.nestedAppAuthAdapter.fromNaaAccountInfo(e)]:[]}handleRedirectPromise(e){throw r.createUnsupportedError()}loginPopup(e){if(void 0!==e)return this.acquireTokenInteractive(e);throw r.createUnsupportedError()}loginRedirect(e){throw r.createUnsupportedError()}logout(e){throw r.createUnsupportedError()}logoutRedirect(e){throw r.createUnsupportedError()}logoutPopup(e){throw r.createUnsupportedError()}ssoSilent(e){return this.acquireTokenSilentInternal(e)}getTokenCache(){throw r.createUnsupportedError()}getLogger(){return this.logger}setLogger(e){this.logger=e}setActiveAccount(e){this.logger.warning("nestedAppAuth does not support setActiveAccount")}getActiveAccount(){const e=this.operatingContext.getActiveAccount();return void 0!==e?this.nestedAppAuthAdapter.fromNaaAccountInfo(e):null}initializeWrapperLibrary(e,t){}setNavigationClient(e){this.logger.warning("setNavigationClient is not supported in nested app auth")}getConfiguration(){return this.config}isBrowserEnv(){return this.operatingContext.isBrowserEnvironment()}getBrowserCrypto(){return this.browserCrypto}getPerformanceClient(){throw r.createUnsupportedError()}getRedirectResponse(){throw r.createUnsupportedError()}preflightBrowserEnvironmentCheck(e,t){throw r.createUnsupportedError()}clearCache(e){return(0,d.Z)(function*(){throw r.createUnsupportedError()})()}hydrateCache(e,t){return(0,d.Z)(function*(){throw r.createUnsupportedError()})()}}}}]);