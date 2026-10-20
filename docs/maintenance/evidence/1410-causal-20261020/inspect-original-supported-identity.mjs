import{getSessionInfo,getSessionMessages}from'/Volumes/DevSSD/meridian/repo/node_modules/@anthropic-ai/claude-agent-sdk/sdk.mjs';
import{writeFileSync}from'node:fs';
const root='/private/var/folders/ks/xnz659y11jl44j80b_lfws6r0000gn/T/meridian-probe-proxy-wDgOnV',id='1d3bc6d5-506e-4882-8ae5-0ab392e47c2d';
const result={scope:'Read-only supported SDK APIs for one known-owned historical fixture; zero inference and no credential access',session:id,cases:[]};
for(const config of[root+'/meridian-config/profiles/owned-1410',root+'/claude-config',root+'/native-config']){
 process.env.CLAUDE_CONFIG_DIR=config;const row={config};result.cases.push(row);
 try{const info=await getSessionInfo(id,{dir:root});row.exists=!!info;if(info){if(info.cwd!==root)throw Error('Owned fixture cwd mismatch');row.info={sessionId:info.sessionId,cwd:info.cwd,lastModified:info.lastModified};row.rows=(await getSessionMessages(id,{dir:root})).map(m=>({type:m.type,uuid:m.uuid,id:m.message?.id,model:m.message?.model,stopReason:m.message?.stop_reason,timestamp:m.timestamp,contentTypes:m.message?.content?.map?.(b=>b.type),keys:Object.keys(m)}))}}catch(error){row.error={name:error.name,message:error.message}}
}
writeFileSync('/tmp/meridian-resume-20261020/1410-causal/original-supported-identity-recheck.json',JSON.stringify(result,null,2)+'\n',{mode:0o600});console.log(JSON.stringify({result:'METADATA_CAPTURED',modelCalls:0}));
