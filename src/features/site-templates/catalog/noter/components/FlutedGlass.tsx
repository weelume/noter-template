'use client';
import {useEffect,useRef,useState} from 'react';
/** 原站联系页使用无时间变量的实时折射着色器；保留相同16条凹槽、1.4曲率与RGB色散。 */
export function FlutedGlass({locale}:{locale:'zh'|'en'}){
 const ref=useRef<HTMLCanvasElement>(null),[failed,setFailed]=useState(false);
 useEffect(()=>{const canvas=ref.current;if(!canvas)return;let disposed=false;const gl=canvas.getContext('webgl2',{alpha:false});const fail=(error:unknown)=>{console.error('[noter:glass] 渲染失败',error);setFailed(true)};if(!gl){fail(new Error('WebGL2 unavailable'));return}
 const shaders:WebGLShader[]=[];let program:WebGLProgram|null=null,texture:WebGLTexture|null=null,buffer:WebGLBuffer|null=null,observer:ResizeObserver|null=null;
 try{
 const shader=(type:number,source:string)=>{const value=gl.createShader(type);if(!value)throw new Error('无法创建着色器');shaders.push(value);gl.shaderSource(value,source);gl.compileShader(value);if(!gl.getShaderParameter(value,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(value)||'着色器编译失败');return value};
 const vertex=shader(gl.VERTEX_SHADER,'#version 300 es\nin vec2 a_position;void main(){gl_Position=vec4(a_position,0.,1.);}');
 const fragment=shader(gl.FRAGMENT_SHADER,`#version 300 es
 precision highp float;
 uniform vec2 u_resolution;uniform sampler2D u_texture;out vec4 fragColor;
 void main(){
 vec2 uv=gl_FragCoord.xy/u_resolution;uv.y=1.-uv.y;
 vec2 ratio=u_resolution/vec2(textureSize(u_texture,0));
 vec2 base=(uv-.5)*(ratio/max(ratio.x,ratio.y))+.5;
 float coord=uv.x*16.*min(u_resolution.x/u_resolution.y,1.)+.5;
 float pos=fract(coord),x=(pos-.5)*2.;
 float aa=smoothstep(0.,fwidth(coord)*2.,min(pos,1.-pos));
 float nx=pow(abs(x),1.4)*sign(x)*aa;
 vec3 normal=normalize(vec3(nx,0.,sqrt(1.-clamp(nx*nx,0.,1.))));
 vec2 shift=normal.xy*.11;
 vec3 col=vec3(texture(u_texture,base+shift*(1.-1.54)).r,texture(u_texture,base+shift).g,texture(u_texture,base+shift*(1.+1.54)).b);
 vec3 light=normalize(vec3(.5,.8,1.));float diffuse=max(dot(normal,light),0.);
 float specular=pow(max(dot(reflect(-light,normal),vec3(0.,0.,1.)),0.),32.);
 fragColor=vec4(col*(.85+diffuse*.15)+specular*.08,1.);
 }`);
 program=gl.createProgram();if(!program)throw new Error('无法创建渲染程序');gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program)||'程序链接失败');gl.useProgram(program);
 buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const location=gl.getAttribLocation(program,'a_position');gl.enableVertexAttribArray(location);gl.vertexAttribPointer(location,2,gl.FLOAT,false,0,0);
 texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
 const image=new Image();image.onload=()=>{if(disposed)return;try{gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);const render=()=>{const bounds=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio,2);canvas.width=Math.round(bounds.width*dpr);canvas.height=Math.round(bounds.height*dpr);gl.viewport(0,0,canvas.width,canvas.height);gl.uniform2f(gl.getUniformLocation(program!,'u_resolution'),canvas.width,canvas.height);gl.drawArrays(gl.TRIANGLES,0,6)};render();observer=new ResizeObserver(render);observer.observe(canvas);if(process.env.NODE_ENV==='development')console.debug('[noter:glass]',{status:'rendered',flutes:16,animated:false})}catch(error){fail(error)}};image.onerror=()=>{if(!disposed)fail(new Error('折射纹理加载失败'))};image.src='/templates/noter/images/cMLK8aKGeiuLOiMvnODXCFJ2eHc.png';
 }catch(error){fail(error)}
 return()=>{disposed=true;observer?.disconnect();shaders.forEach(s=>gl.deleteShader(s));gl.deleteProgram(program);gl.deleteTexture(texture);gl.deleteBuffer(buffer)};
 },[]);
 return <div className="nt-glass-art"><canvas ref={ref} aria-label={locale==='zh'?'彩色长虹玻璃折射效果':'Colorful fluted glass refraction'}/>{failed&&<p role="alert">{locale==='zh'?'玻璃效果无法渲染，请检查浏览器图形加速。':'Glass rendering failed. Please check browser graphics acceleration.'}</p>}</div>
}
